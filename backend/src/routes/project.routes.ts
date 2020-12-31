import { Router } from "express";

import ProjectController from "../controllers/project.controller";
import ProjectValitadion from "../validation/project.valid";
import { verifyRequest } from "../utils/validation";
import { verifyJWT } from "../middlewares/auth";

const ProjectRouter = Router();

ProjectRouter.get("/", ProjectController.getter);
ProjectRouter.post(
  "/",
  verifyJWT,
  ProjectValitadion.create,
  verifyRequest,
  ProjectController.create
);
ProjectRouter.put(
  "/:id",
  verifyJWT,
  ProjectValitadion.edit,
  verifyRequest,
  ProjectController.edit
);
ProjectRouter.delete(
  "/:id",
  verifyJWT,
  ProjectValitadion.delete,
  verifyRequest,
  ProjectController.delete
);

export default ProjectRouter;
