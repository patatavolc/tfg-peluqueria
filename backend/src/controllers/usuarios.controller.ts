export const createUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  if (data.id) {
    newUser(data)
      .then((createUser) => {
        res.status(200).send(newUser);
      })
      .catch(next);
  } else {
    next(new Error("Faltan datos obligatorios"));
  }
};
