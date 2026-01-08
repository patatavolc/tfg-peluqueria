import { Router } from "express";
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  getUsuarioByEmail,
  getUsuarioByTelefono,
  updateUsuario,
} from "../controllers/usuarios.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios:id", getUsuarioById);
router.get("usuarios/email/:email", getUsuarioByEmail);
router.get("usuarios/telefono/:telefono", getUsuarioByTelefono);

router.post("/usuario/", createUsuario);
router.put("/usuarios/:id", updateUsuario);

export default router;
