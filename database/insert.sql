INSERT INTO usuarios (email, password_hash, nombre, telefono, rol, puesto, url_imagen) VALUES
('admin@fressas.com', '$2b$10$X7...', 'Administrador General', '600000000', 'ADMIN', 'Gerente', NULL),
('mariajo@fressas.com', '$2b$10$X7...', 'Mariajo', '600111222', 'EMPLEADO', 'Peluquera Senior', 'https://i.pravatar.cc/150?u=mariajo'),
('claudia@fressas.com', '$2b$10$X7...', 'Claudia', '600333444', 'EMPLEADO', 'Esteticista', 'https://i.pravatar.cc/150?u=claudia'),
('judith@fressas.com', '$2b$10$X7...', 'Judith', '600555666', 'EMPLEADO', 'Masajista', 'https://i.pravatar.cc/150?u=judith'),
('enrique@email.com', '$2b$10$X7...', 'Enrique Garcia', '611223344', 'CLIENTE', NULL, NULL),
('mariluz@email.com', '$2b$10$X7...', 'Mariluz Gimenez', '622334455', 'CLIENTE', NULL, NULL),
('nicolas@email.com', '$2b$10$X7...', 'Nicolas Blasco', '633445566', 'CLIENTE', NULL, NULL);

INSERT INTO servicios (titulo, descripcion, precio, duracion_minutos, categoria, url_imagen) VALUES
('Corte Caballero', 'Corte clásico o moderno con lavado incluido', 15.00, 30, 'Corte', 'https://example.com/corte_h.jpg'),
('Corte Dama', 'Corte, lavado y secado', 25.00, 45, 'Corte', 'https://example.com/corte_m.jpg'),
('Tinte Completo', 'Coloración permanente de raíz a puntas', 45.00, 90, 'Coloración', 'https://example.com/tinte.jpg'),
('Masaje Capilar', 'Tratamiento relajante y revitalizante', 30.00, 20, 'Tratamiento', 'https://example.com/masaje.jpg');

INSERT INTO productos (nombre, marca, categoria, descripcion, precio, stock, destacado) VALUES
('Champú Hidratante', 'Kerastase', 'Champú', 'Para cabello seco', 20.00, 50, TRUE),
('Cera Mate', 'American Crew', 'Styling', 'Fijación fuerte', 18.50, 30, FALSE),
('Mascarilla Reparadora', 'Olaplex', 'Tratamiento', 'Reparación intensiva', 28.00, 15, TRUE);

INSERT INTO citas (cliente_id, empleado_id, servicio_id, fecha_hora_inicio, estado, genero) VALUES
(5, 2, 1, '2025-07-15 10:00:00', 'COMPLETADA', 'Hombre'),
(6, 3, 3, '2025-07-20 16:30:00', 'COMPLETADA', 'Mujer'),
(7, 2, 1, '2025-08-04 11:00:00', 'PENDIENTE', 'Hombre');

INSERT INTO facturas (cliente_id, codigo_factura, fecha_emision, total, estado, metodo_pago) VALUES
(5, '#2024-001', '2025-07-15 10:35:00', 75.00, 'PAGADA', 'Tarjeta'),
(6, '#2024-002', '2025-07-20 18:00:00', 75.00, 'PAGADA', 'Efectivo'),
(7, '#2024-003', '2025-08-04 12:00:00', 75.00, 'PENDIENTE', NULL),
(5, '#2024-004', '2025-08-27 09:00:00', 75.00, 'VENCIDA', NULL);

INSERT INTO detalles_factura (factura_id, concepto, cantidad, precio_unitario, subtotal) VALUES
(1, 'Corte Caballero', 1, 15.00, 15.00),
(1, 'Pack Productos Premium', 2, 30.00, 60.00),
(2, 'Tinte Completo', 1, 45.00, 45.00),
(2, 'Masaje Capilar', 1, 30.00, 30.00);