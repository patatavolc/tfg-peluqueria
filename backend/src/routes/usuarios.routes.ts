import express, { Router } from "express";

const router = Router();

router.get('/usuarios', getAllUsers);
router.get('/usuarios:id', getUserById);
router.get('usuarios/:email', getUserByEmail);
router.get('usuarios/:telefono', getuserById);

router.post('/usuario/', createUser);
router.put('/usuarios/:id', updateUsuario);

export default router;


