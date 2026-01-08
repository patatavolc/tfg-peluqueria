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

export const getAllUsers = async () => {
  const query = `SELECT id, nombre, email, telefono, rol, creado_en FROM usuarios ORDER BY creadoen DESC`;
  const result = await pool.query(query);
  return result.rows[0];
};

export const getUserById = async (id: number) => {
  const query = `SELECT id, nombre, email, telefono, rol, creado_en FROM usuarios WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const getUserByEmail = async (email: string) => {
  const query =
    "SELECT id, nombre, email, telefono, rol, creado_en FROM usuarios WHERE email = $1";
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

export const getUserByTelefono = async (telefono: string) => {
  const query =
    "SELECT id, nombre, email, telefono, rol, creado_en FROM usuarios WHERE telefono = $1";
  const result = await pool.query(query, [telefono]);
  return result.rows[0];
};
