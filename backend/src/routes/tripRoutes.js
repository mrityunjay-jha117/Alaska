import express from "express";
import {
  getAllTrips,
  getTripById,
  createTrip,
  updateTrip,
  deleteTrip,
  getTripsByUserId,
  getTripsByStation,
} from "../controllers/tripController.js";

const router = express.Router();

// GET /api/trips - Get all trips
router.get("/", getAllTrips);

// GET /api/trips/:id - Get trip by ID
router.get("/:id", getTripById);

// GET /api/trips/user/:userId - Get trips by user ID
router.get("/user/:userId", getTripsByUserId);

// GET /api/trips/station/:station - Get trips by station
router.get("/station/:station", getTripsByStation);

// POST /api/trips - Create new trip
router.post("/", createTrip);

// PUT /api/trips/:id - Update trip
router.put("/:id", updateTrip);

// DELETE /api/trips/:id - Delete trip
router.delete("/:id", deleteTrip);

export default router;
