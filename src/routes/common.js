import express from "express";
const router = express.Router();

import { home, one, post } from "../controllers/common";

router.get("/", home);
router.get("/one", one);
router.post("/", post);

export default router;
