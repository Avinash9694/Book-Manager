import express from "express";
import {
  newBookCreateController,
  getBookListController,
  getBookDetailByIdController,
  updateBookDetailController,
  deleteBookController,
} from "../controller/bookManagerController.js";

const router = express.Router();

//routes
// create new book
router.post("/books", newBookCreateController);

// Get a list of all books
router.get("/books", getBookListController);

// Get details of a specific book by its ID
router.get("/books/:bookId", getBookDetailByIdController);

// Update a book's details
router.put("/books/:bookId", updateBookDetailController);

// Delete a book
router.delete("/books/:bookId", deleteBookController);

export default router;
