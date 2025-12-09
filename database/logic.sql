-- Function y trigger para actualizar el timestamp
CREATE OR REPLACE FUNCTION actualizar_timestamp()
RETURN TRIGGER AS $$
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
RETURN TRIGGER AS $$
BEGIN 
  IF NEW.producto_id IS NOT NULL THEN
    UPDATE Productos
    SET stock = stock - NEW.cantidad
    WHERE id = NEW.producto_id
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_descontar_stock
AFTER INSERT ON detalles_factura
FOR EACH ROW
EXECUTE FUNCTION trigger_descontar_stock();

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
