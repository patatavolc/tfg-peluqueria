import type { Request, Response, NextFunction } from "express";
import {
  newUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByTelefono,
  updateUser,
} from "../services/usuarios.service";

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

export const getUsuarios = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUsuarioById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await getUserById(parseInt(id as string));

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsuarioByEmail = async (
  req: Request<{ email: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsuarioByTelefono = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { telefono } = req.params;
    const user = await getUserByTelefono(telefono as string);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedUser = await updateUser(parseInt(id as string), data);

    if (!updatedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
