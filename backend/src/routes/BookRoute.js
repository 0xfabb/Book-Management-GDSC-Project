// See i have defined 4 routes for CRUD operations... and these have controllers which are defined in a seprate file...
import express from "express";
import {
  addBookControl,
  deleteBookControl,
  getBookControl,
  updateBookControl,
} from "../controllers/bookRouteController.js";

const router = express.Router();

router.post("/addbook", addBookControl);
router.get("/getbook", getBookControl);
router.put("/updateBook", updateBookControl);
router.delete("/deletebook", deleteBookControl);

export default router;
