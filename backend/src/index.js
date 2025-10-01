import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import utilRoutes from "./routes/utilsRoutes.js";

dotenv.config();

const app = express();
const env = process.env;
const PORT = env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/utils", utilRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Metro Lines API is running!",
    timestamp: new Date().toISOString(),
  });
});
// documentation route
app.get("/documentation", (req, res) => {
  res.status(200).json({
    message: "this is the documentation endpoint. API documentation will be provided here.",
  });
});

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Metro Lines API",
    endpoints: {
      users: "/api/users",
      trips: "/api/trips",
      chats: "/api/chats",
      chats: "/api/utils",
      health: "/health",
    },
  });
});

// 404 handler 
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? error.message : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`Metro Lines API server is running on port ${PORT}`);
  console.log(`API Documentation available at: http://localhost:${PORT}/documentation`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
