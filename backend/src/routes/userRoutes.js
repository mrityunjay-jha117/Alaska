import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByUsername,
} from "../controllers/userController.js";

const router = express.Router();

// GET /api/users - Get all users
router.get("/", getAllUsers);

// GET /api/users/:id - Get user by ID
router.get("/:id", getUserById);

// GET /api/users/username/:username - Get user by username
router.get("/username/:username", getUserByUsername);

// POST /api/users - Create new user
router.post("/", createUser);

// PUT /api/users/:id - Update user
router.put("/:id", updateUser);

// DELETE /api/users/:id - Delete user
router.delete("/:id", deleteUser);

export default router;
