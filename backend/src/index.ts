import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool, connectDB } from "./config/database.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});

// Iniciar servidor y verificar DB
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log("Servidor conectado a la DB");
  });
};

startServer();
