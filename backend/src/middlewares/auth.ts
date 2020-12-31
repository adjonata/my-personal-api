import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface IAllowed extends Request {
  userId?: number;
}

const verifyJWT = (
  request: IAllowed,
  response: Response,
  next: NextFunction
) => {
  if ("authorization" in request.headers === false) {
    return response.status(402).json({ msg: "No token provided." });
  }

  const token = request.headers.authorization;

  jwt.verify(String(token), String(process.env.SECRET), (error, decoded) => {
    if (error) {
      return response.status(500).json({
        msg: "Failed to authenticate header token"
      });
    }

    if (decoded) {
      request.userId = decoded;
    }

    next();
  });
};

export { verifyJWT };
