import mongoose from "mongoose";
import Book from "../models/Book.js";

export const addBookControl = async (req, res) => {
  try {
    const bookDetails = req.body;
    const newBook = new Book(bookDetails);
    await newBook.save();

    console.log(newBook);
    res.status(200).json({
      msg: "New book added to the library",
      book: newBook,
    });
  } catch (err) {
    res.status(400).json({
      msg: "Failed to add book",
      error: err.message,
    });
  }
};

export const getBookControl = async (req, res) => {
  try {
    const isbn = req.query.ISBN;
    const bookDetails = await Book.findOne({ ISBN: isbn });
    res.status(200).json({
      msg: "Book Found",
      bookDetails,
    });
  } catch (err) {}
};

export const updateBookControl = async (req, res) => {
  try {
    const isbn = req.query.ISBN;
    const UpdateBookData = req.body;
    const bookDetails = await Book.findOneAndUpdate(
      { ISBN: isbn },
      UpdateBookData,
      { new: true }
    );
    res.status(200).json({
      msg: "Book updated successfully",
      book: bookDetails,
    });
  } catch (err) {
    res.status(400).json("Error updating the book details");
  }
};

export const deleteBookControl = async (req, res) => {
  const isbn = req.query.ISBN;
  const deletedBook = await Book.findOneAndDelete({ ISBN: isbn });
  if (!deletedBook) {
    return res.status(404).json({ msg: "Book not found for deletion" });
  }
  res.status(200).json({
    msg: "Book deleted successfully",
    deletedBook,
  });
};
