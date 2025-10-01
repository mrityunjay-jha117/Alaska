import express from "express";
import {
  getAllChats,
  getChatById,
  createChat,
  updateChat,
  deleteChat,
  getChatsBetweenUsers,
  getChatsByUserId,
} from "../controllers/chatController.js";

const router = express.Router();

// GET /api/chats - Get all chats
router.get("/", getAllChats);

// GET /api/chats/:id - Get chat by ID
router.get("/:id", getChatById);

// GET /api/chats/user/:userId - Get chats for a specific user
router.get("/user/:userId", getChatsByUserId);

// GET /api/chats/between/:senderId/:receiverId - Get chats between two users
router.get("/between/:senderId/:receiverId", getChatsBetweenUsers);

// POST /api/chats - Create new chat message
router.post("/", createChat);

// PUT /api/chats/:id - Update chat message
router.put("/:id", updateChat);

// DELETE /api/chats/:id - Delete chat message
router.delete("/:id", deleteChat);

export default router;
