import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool, connectDB } from "./config/database";
import mainRouter from "./routes/mainRouter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api", mainRouter);

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
