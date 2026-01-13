import type { Request, Response, NextFunction } from "express";
import {
  newService,
  getAllServices,
  getServiceById,
  updateService,
} from "../services/servicios.service";
import { error } from "node:console";

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
      return res.status(400).json({
        error: "Faltan datos obligatoios (titulo, precio, duracion, categoria",
      });
    }

    const createdService = await newService(data);
    res.status(201).json(createdService);
  } catch (error) {
    next(error);
  }
};

export const getServicios = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const services = await getAllServices();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

export const getServicioById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const service = await getServiceById(parseInt(id as string));

    if (!service) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};
