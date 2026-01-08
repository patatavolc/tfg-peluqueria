import { pool } from "../config/database";

export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  telefono?: string;
  password_hash?: string;
  rol: "CLIENTE" | "EMPLEADO" | "ADMIN";
  creado_en?: Date;
  actualizado_en?: Date;
}

export const newUser = async (data: Usuario) => {
  const { nombre, email, telefono, password_hash, rol = "CLIENTE" } = data;

  const query = `
  INSERT INTO usuarios (nombre, email, telefono, password_hash, rol) 
  VALUES($1, $2, $3, $4, $5)
  RETURNING *
  `;

  const values = [nombre, email, telefono, password_hash, rol];
  const result = await pool.query(query, values);

  return result.rows[0];
};

export const getAllUsers = async () => {
  const query = `SELECT id, nombre, email, telefono, rol, creado_en FROM usuarios ORDER BY creado_en DESC`;
  const result = await pool.query(query);
  return result.rows;
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

export const updateUser = async (id: number, data: Partial<Usuario>) => {
  const fields = [];
  const values = [];
  let paramCount = 1;

  if (data.nombre) {
    fields.push(`nombre = $${paramCount++}`);
    values.push(data.nombre);
  }
  if (data.email) {
    fields.push(`email = $${paramCount++}`);
    values.push(data.email);
  }
  if (data.telefono) {
    fields.push(`telefono = $${paramCount++}`);
    values.push(data.telefono);
  }
  if (data.password_hash) {
    fields.push(`password_hash = $${paramCount++}`);
    values.push(data.password_hash);
  }
  if (data.rol) {
    fields.push(`rol = $${paramCount++}`);
    values.push(data.rol);
  }

  if (fields.length === 0) {
    throw new Error("No hay cambios para actualizar");
  }

  values.push(id);
  const query = `
    UPDATE usuarios
    SET ${fields.join(", ")} 
    WHERE id = $${paramCount}
    RETURNING id, nombre, email, telefono, rol, actualizado_en
  `;

  const result = await pool.query(query, values);
  return result.rows[0];
};
