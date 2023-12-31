import bookModel from "../models/bookModel.js";

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
      message: "New book saved Successfully.",
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
    if (books.length) {
      res.status(201).send(books);
    } else {
      res.status(200).send({ message: "There are 0 book in the list" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get details of a specific book by its ID
export const getBookDetailByIdController = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.bookId);
    res.status(200).send(book);
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
    res.status(200).send(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a book
export const deleteBookController = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.bookId);
    await bookModel.findByIdAndDelete(req.params.bookId);
    res.status(200).send({
      success: true,
      message: `${book.title} book deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
