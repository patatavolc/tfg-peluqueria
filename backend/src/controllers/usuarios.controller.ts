import { Request, Response, NextFunction } from "express";
import { newUser } from "../services/usuarios.service.tsx";

export const createUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    if (!data.nombre || !data.email) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const createUser = await newUser(data);
    res.status(201).json(createUser);
  } catch (error) {
    next(error);
  }
};


