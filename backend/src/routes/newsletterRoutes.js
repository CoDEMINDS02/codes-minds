import express from "express";
import {
  subscribe,
  getSubscribers,
  deleteSubscriber,
} from "../controllers/newsletterController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", subscribe);
router.get("/", protect, getSubscribers);
router.delete("/:id", protect, deleteSubscriber);

export default router;
