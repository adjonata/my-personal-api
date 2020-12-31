import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const verifyRequest = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(422).json(errors.array());
  } else {
    next();
  }
};

export { verifyRequest };
