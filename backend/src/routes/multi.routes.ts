import { Router } from "express";
import MultiController from "../controllers/multi.controller";

const MultiRouter = Router();

MultiRouter.get('/', MultiController.getter);

export default MultiRouter;