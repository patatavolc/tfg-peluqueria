import { pool } from "../config/database";

export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  telefono?: string;
  password?: string;
  rol: "CLIENTE" | "EMPLEDO" | "ADMIN";
  creado_en?: Date;
  actualizado_en?: Date;
}

export const newUser = async (data: Usuario) => {
  const { nombre, email, telefono, password, rol = "CLIENTE" } = data;

  const query = `
  INSERT INTO usuarios (nombre, email, telefono, password, rol)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *
  `;

  const values = [nombre, email, telefono, password, rol];
  const result = await pool.query(query, values);

  return result.rows[0];
};
