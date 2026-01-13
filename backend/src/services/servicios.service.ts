import { pool } from "../config/database.ts";

export interface Servicio {
  id?: number;
  titulo: string;
  descripcion?: string;
  precio: number;
  duracion_minutos: number;
  categoria: string;
  url_imagen: string;
  creado_en?: Date;
}

export const newService = async (data: Servicio) => {
  const {
    titulo,
    descripcion,
    precio,
    duracion_minutos,
    categoria,
    url_imagen,
  } = data;

  const query = `
  INSERT INTO servicios (titulo, descripcion, precio, duracion_minutos, categoria, url_imagen)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `;

  const values = [
    titulo,
    descripcion,
    precio,
    duracion_minutos,
    categoria,
    url_imagen,
  ];
  const result = await pool.query(query, values);

  return result.rows[0];
};

export const getAllServices = async () => {
  const query = `SELECT * FROM servicios ORDER BY creado_en DESC`;
  const result = await pool.query(query);
  return result.rows;
};

export const getServiceById = async (id: number) => {
  const query = `SELECT * FROM servicios WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const updateService = async (id: number, data: Partial<Servicio>) => {
  const fields = [];
  const values = [];
  let paramCount = 1;

  if (data.titulo) {
    fields.push(`titulo = $${paramCount++}`);
    values.push(data.titulo);
  }
  if (data.descripcion !== undefined) {
    fields.push(`descripcion = $${paramCount++}`); // Permite vaciar la descripcion si se envia un string vacio
    values.push(data.descripcion);
  }
  if (data.precio) {
    fields.push(`precio = $${paramCount++}`);
    values.push(data.precio);
  }
  if (data.duracion_minutos) {
    fields.push(`duracion_minutos = $${paramCount++}`);
    values.push(data.duracion_minutos);
  }
  if (data.categoria) {
    fields.push(`categoria = $${paramCount++}`);
    values.push(data.categoria);
  }
  if (data.url_imagen !== undefined) {
    fields.push(`url_imagen = $${paramCount++}`);
    values.push(data.url_imagen);
  }

  if (fields.length === 0) {
    throw new Error("No hay cambios para actualizar");
  }

  values.push(id);
  const query = `UPDATE servicios SET ${fields.join(
    ", "
  )} WHERE id = $${paramCount} RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0];
};
