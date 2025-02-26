import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersforSidebar,
  sendMessages,
} from "../middleware/message.middleware.js";
const router = express.Router();

router.get("/users", protectRoute, getUsersforSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);

export default router;
