import express from "express";
import {
  getWebSeries,
  getWebSeriesById,
  createWebSeries,
  updateWebSeries,
  deleteWebSeries,
} from "../controllers/webSeriesController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getWebSeries);
router.get("/:id", getWebSeriesById);
router.post("/", protect, createWebSeries);
router.put("/:id", protect, updateWebSeries);
router.delete("/:id", protect, deleteWebSeries);

export default router;
