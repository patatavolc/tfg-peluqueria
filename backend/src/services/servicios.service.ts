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

  const values = [titulo, descripcion, precio, duracion_minutos, categoria, url_imagen];
  const result = await pool.query(query, values);

  return result.rows[0];
};


