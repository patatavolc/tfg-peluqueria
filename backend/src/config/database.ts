import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("error", (err) => {
  console.error("❌ Error de conexion a la Base de Datos:", err);
  process.exit(-1);
});

// Función para verificar conexión al iniciar
export const connectDB = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    console.log("✅ Conectado a la Base de Datos");
    console.log("🕐 Hora del servidor DB:", result.rows[0].now);
    client.release();
  } catch (error) {
    console.error("❌ Error al conectar a la Base de Datos:", error);
    process.exit(-1);
  }
};
