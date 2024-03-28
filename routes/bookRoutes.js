import { Router } from "express";
import { deleteBook, getBookData, saveBookData, updateBookData } from "../services/crudService.js";
import Book from "../models/bookSchema.js";

const router = Router();

router.post("/create-book", async (req, res) => {
  try {
    const bookData = req.body;
    const book = await saveBookData(bookData);
    if (book) {
      res.status(201).send(book);
    } else {
      res.status(401).send("Error creating the book");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/get-books", async (req, res) => {
  try {
    const books = await getBookData();
    res.status(200).send(books);
  } catch (e) {
    console.log(e);
  }
});

router.post("/update-book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const bookData= req.body
    const book = await updateBookData(id,bookData);
    if (book) {
      res.status(200).send(book);
    } else {
      res.status(400).send("Error fetching books");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/delete-book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteBook(id);
    res.status(200).send("Book Deleted");
  } catch (e) {
    console.log(e);
  }
});

export default router;
