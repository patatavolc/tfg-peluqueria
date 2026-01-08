import express from "express";
const router = express.Router();

import usuariosRoutes from "./usuarios.routes";

router.use(usuariosRoutes);

export default router;
