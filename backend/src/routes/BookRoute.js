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
