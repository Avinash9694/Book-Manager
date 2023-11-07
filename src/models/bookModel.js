import mongoose from "mongoose";

// Mongoose schema for the Book
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
