import bookModel from "../models/bookModel.js";

import dotenv from "dotenv";

dotenv.config();

// Create a new book
export const newBookCreateController = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    //validations
    if (!title) {
      return res.send({ error: "Title is Required" });
    }

    if (!author) {
      return res.send({ message: "Author is Required" });
    }

    if (!summary) {
      return res.send({ message: "Summary is Required" });
    }

    //check existing book
    const existingBook = await bookModel.findOne({ title });

    // existing book
    if (existingBook) {
      return res.status(200).send({
        success: false,
        message: "Book already exist",
      });
    }

    //save new book
    const newBook = await new bookModel({
      title,
      author,
      summary,
    }).save();

    res.status(201).send({
      success: true,
      message: "New book saved Successfully",
      newBook,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a list of all books
export const getBookListController = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get details of a specific book by its ID
export const getBookDetailByIdController = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.bookId);
    res.json(book);
  } catch (error) {
    res
      .status(400)
      .json("Cannot find the mentioned book id. Please check the id.");
  }
};

// Update a book's details
export const updateBookDetailController = async (req, res) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      { new: true }
    );
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a book
export const deleteBookController = async (req, res) => {
  try {
    await bookModel.findByIdAndRemove(req.params.bookId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
