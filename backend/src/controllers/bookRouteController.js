// See i have defined 4 routes for CRUD operations and these 4 routes need 4 controllers, since this is a cleaner syntax hence i am writing these controllers here and these can be mapped on the route, Also initially i just added these 4 controllers but since i still have time for this hence i am also adding some mild error handling...

import Book from "../models/Book.js";

export const addBookControl = async (req, res) => {
  try {
    // I am using the modern try and catch syntax since i wanted to make this thing asynchronous, if i don't use this and something wrong happens then server will crash and hence i am using this, so that even if something wrong happens it just proceeds to catch and shows the error i defined rather than simply crashing away...
    const bookDetails = req.body;
    if (!bookDetails) {
      // See, this will ensure that a empty post does not get passed..
      res.status(400).json({
        msg: "Please enter the book details",
      });
    }
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
      error: err.message, // Using this to extract the exact message from error...
    });
  }
};

export const getBookControl = async (req, res) => {
  try {
    const isbn = req.query.ISBN; // Using isbn as the main thing to fetch the book, like on the frontend we can easily make calls to all RUD routes with the book's ISBN as query paramter for which we want to apply this RUD operation and it gets extracted simply in the backend and it can be used primarly in each route to find the book's details...
    if (!isbn) {
      res.status(400).json("Please give the ISBN of the book");
    }
    const bookDetails = await Book.findOne({ ISBN: isbn });
    res.status(200).json({
      msg: "Book Found",
      bookDetails,
    });
  } catch (err) {
    res.status(400).json("Error finding this book");
  }
};

export const updateBookControl = async (req, res) => {
  try {
    const isbn = req.query.ISBN;
    if (!isbn) {
      res.status(400).json("Please give the ISBN of the book");
    }
    const UpdateBookData = req.body;
    if (!UpdateBookData) {
      res
        .status(400)
        .json("Please give data which needs to be updated for this book");
    }
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
  try {
    const isbn = req.query.ISBN;
    if (!isbn) {
      res.status(400).json("Please give the ISBN of the book");
    }
    const deletedBook = await Book.findOneAndDelete({ ISBN: isbn });
    if (!deletedBook) {
      return res.status(404).json({ msg: "Book not found for deletion" });
    }
    res.status(200).json({
      msg: "Book deleted successfully",
      deletedBook,
    });
  } catch (err) {
    res.status(400).json("Error deleting this book");
  }
};



// These were the 4 controllers, i know i have not added comments to all the lines, but i would love to meet you, and when it happens i will show and tell everything required... 

