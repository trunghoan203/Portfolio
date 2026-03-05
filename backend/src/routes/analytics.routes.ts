import { Router } from "express";
import { recordView } from "../controllers/analytics.controller";

const router = Router();
router.post("/view", recordView);

export default router;
