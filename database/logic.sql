-- Function y trigger para actualizar el timestamp
CREATE OR REPLACE FUNCTION actualizar_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.actualizado_en = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_usuarios
BEFORE UPDATE ON usuarios
FOR EACH ROW
EXECUTE FUNCTION actualizar_timestamp();

-- Funcion y trigger para descontar stock automaticamente
CREATE OR REPLACE FUNCTION descontar_stock()
RETURNS TRIGGER AS $$
BEGIN 
  IF NEW.producto_id IS NOT NULL THEN
    UPDATE Productos
    SET stock = stock - NEW.cantidad
    WHERE id = NEW.producto_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_descontar_stock
AFTER INSERT ON detalles_factura
FOR EACH ROW
EXECUTE FUNCTION descontar_stock();

-- Vista para el dashboard de inventario
-- Genera un sku falso y la etiqueta de estado automaticamente 
-- EJ: FP-SH-001
DROP VIEW IF EXISTS vista_dashboard_productos;
CREATE VIEW vista_dashboard_productos AS
SELECT
  p.id,
  p.url_imagen,
  p.nombre,
  p.marca,
  p.categoria,
  p.precio,
  p.stock,

  'FP-' || UPPER(SUBSTRING(p.categoria, 1, 2)) || '-' || LPAD(p.id::text, 3, '0') AS sku,

  CASE 
    WHEN p.stock = 0 THEN 'Sin Stock'
    WHEN p.stock <= 5 THEN 'Bajo Stock'
    ELSE 'En Stock'
  END AS estado_texto,

  CASE 
    WHEN p.stock = 0 THEN 'error'
    WHEN p.stock <= 5 THEN 'warning'
    ELSE 'success'
  END AS estado_color
FROM productos p
ORDER BY p.nombre ASC;

-- VIsta para el dashboard de servicios
-- Muestra servicios y concatena los nombres de los peluqueros que lo realizan
DROP VIEW IF EXISTS vista_dashboard_servicios;

CREATE VIEW vista_dashboard_servicios AS
SELECT
  s.id,
  s.titulo AS nombre_servicio,
  s.duracion_minutos || ' min' AS duracion_formateada,
  s.precio,
  s.categoria,

  -- SUBCONSULTA. Se usa el historial para ver el peluquero que ha hecho el servicio
  COALESCE(
    (SELECT STRING_AGG(DISTINCT u.nombre, ', ')
    FROM citas c
    JOIN usuarios u ON c.empleado_id = u.id
    WHERE c.servicio_id = s.id),
    'Todos'
  ) AS peluqueros_asignados
FROM servicios s
ORDER BY s.titulo ASC;

-- Vista para el dashboard de facturas
DROP VIEW IF EXISTS vista_dashboard_facturas;

CREATE VIEW vista_dashboard_facturas AS
SELECT
  f.id,
  f.codigo_factura,
  TO_CHAR(f.fecha_emision, 'DD/MM/YYYY') AS fecha_formateada,
  u.nombre AS cliente,
  f.total,
  f.estado,

  -- Color 
  CASE 
    WHEN f.estado = 'PAGADA' THEN 'success'
    WHEN f.estado = 'PENDIENTE' THEN 'warning'
    WHEN f.estado = 'VENCIDA' OR f.estado = 'CANCELADA' THEN 'error'
    ELSE 'default'
  END AS estado_color
FROM facturas f 
JOIN usuarios u ON f.cliente_id = u.id
ORDER BY f.fecha_emision DESC;