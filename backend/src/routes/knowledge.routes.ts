import { Router } from "express";

import KnowledgeController from "../controllers/knowledge.controller";
import KnowledgeValidation from "../validation/knowledge.valid";
import { verifyRequest } from "../utils/validation";
import { verifyJWT } from "../middlewares/auth";

const KnowledgeRouter = Router();

KnowledgeRouter.get("/", KnowledgeController.getter);
KnowledgeRouter.post(
  "/",
  verifyJWT,
  KnowledgeValidation.create,
  verifyRequest,
  KnowledgeController.create
);
KnowledgeRouter.put(
  "/:id",
  verifyJWT,
  KnowledgeValidation.edit,
  verifyRequest,
  KnowledgeController.edit
);
KnowledgeRouter.delete(
  "/:id",
  verifyJWT,
  KnowledgeValidation.delete,
  verifyRequest,
  KnowledgeController.delete
);

export default KnowledgeRouter;