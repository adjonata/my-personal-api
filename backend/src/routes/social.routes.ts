import { Router } from "express";

import SocialController from "../controllers/social.controller";
import SocialValidation from "../validation/social.valid";
import { verifyRequest } from "../utils/validation";
import { verifyJWT } from "../middlewares/auth";

const SocialRouter = Router();

SocialRouter.get("/", SocialController.getter);
SocialRouter.post(
  "/",
  verifyJWT,
  SocialValidation.create,
  verifyRequest,
  SocialController.create
);
SocialRouter.put(
  "/:id",
  verifyJWT,
  SocialValidation.edit,
  verifyRequest,
  SocialController.edit
);
SocialRouter.delete(
  "/:id",
  verifyJWT,
  SocialValidation.delete,
  verifyRequest,
  SocialController.delete
);

export default SocialRouter;
