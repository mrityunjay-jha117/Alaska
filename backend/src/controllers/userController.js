import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        image: true,
        about: true,
        bio: true,
        trips: true,
      },
    });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        trips: true,
        sentChats: true,
        receivedChats: true,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, username, email, password, image, about, bio } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
        image,
        about,
        bio,
      },
    });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    if (error.code === "P2002") {
      res
        .status(400)
        .json({ success: false, error: "Username or email already exists" });
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email, password, image, about, bio } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        username,
        email,
        password,
        image,
        about,
        bio,
      },
    });

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ success: false, message: "User not found" });
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ success: false, message: "User not found" });
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

// Get user by username
export const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        trips: true,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
