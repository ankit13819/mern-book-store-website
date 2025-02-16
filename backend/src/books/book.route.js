const express = require('express');
const {
  postBook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  deleteABook } = require('./book.controller');

const router = express.Router();

// post a book
router.post("/create-book", postBook)


// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", UpdateBook);

router.delete("/:id", deleteABook)


module.exports = router;