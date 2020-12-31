import { Router } from "express";
import { verifyJWT } from "../middlewares/auth";

import AuthController from "../controllers/auth.controller";
import AuthValidation from "../validation/auth.valid";
import { verifyRequest } from "../utils/validation";

const AuthRouter = Router();

AuthRouter.post(
  "/register",
  verifyJWT,
  AuthValidation.create,
  verifyRequest,
  AuthController.register
);
AuthRouter.get("/", verifyJWT, AuthController.getter);
AuthRouter.post(
  "/login",
  AuthValidation.create,
  verifyRequest,
  AuthController.login
);

export default AuthRouter;
