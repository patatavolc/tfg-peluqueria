import type { Request, Response, NextFunction } from "express";
import {
  newService,
  getAllServices,
  getServiceById,
  updateService,
} from "../services/servicios.service";

export const createServicio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    //Validacion de campos
    if (
      !data.titulo ||
      !data.precio ||
      !data.duracion_minutos ||
      data.categoria
    ) {
      return res
        .status(400)
        .json({
          error:
            "Faltan datos obligatoios (titulo, precio, duracion, categoria",
        });
    }

    const createdService = await newService(data);
    res.status(201).json(createdService);
  } catch (error) {
    next(error);
  }
};
