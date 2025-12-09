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
