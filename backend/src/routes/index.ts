import { Router } from "express";

import AboutRouter from "./about.routes";
import KnowledgeRouter from "./knowledge.routes";
import ProjectRouter from "./project.routes";
import SocialRouter from "./social.routes";
import MultiRouter from "./multi.routes";
import AuthRouter from "./auth.routes";

const router = Router();

router.use("/about", AboutRouter);
router.use("/knowledge", KnowledgeRouter);
router.use("/project", ProjectRouter);
router.use("/social", SocialRouter);
router.use("/multi", MultiRouter);
router.use("/auth", AuthRouter);

export default router;
