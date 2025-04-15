// Here i am defining this mongoose model for the books, this will have certain fields like name, isbn, author, genre and if the book is available, this was mentioned in the task requirement...

import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
    Author: {
      type: String,
      required: true, // Can't make this field unique otherwise it will allow only 1 book from each author...
    },
    availability: {
      type: Boolean,
      default: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
