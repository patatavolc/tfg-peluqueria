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
