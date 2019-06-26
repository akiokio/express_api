import express from "express";
const router = express.Router();

import { home, one, post, downloader } from "../controllers/common";

router.get("/", home);
router.get("/one", one);
router.get("/downloader", downloader);

router.post("/", post);

export default router;
