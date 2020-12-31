import { Router } from "express";

import AboutController from "../controllers/about.controller";
import AboutValidation from "../validation/about.valid";
import { verifyRequest } from "../utils/validation";
import { verifyJWT } from "../middlewares/auth";

const AboutRouter = Router();

AboutRouter.get("/", AboutController.getter);
AboutRouter.post(
  "/",
  verifyJWT,
  AboutValidation.create,
  verifyRequest,
  AboutController.create
);

export default AboutRouter;
