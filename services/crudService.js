import Book from "../models/bookSchema.js";

export async function saveBookData(bookData) {
  try {
    const book = await Book.create( bookData);
    return book;
  } catch (e) {
    console.log(e);
  }
}

export async function updateBookData(id,bookData){
    try{
        const book = await  Book.findByIdAndUpdate(id, bookData, { new: true });
        return book;
    }catch(e){
        console.log(e);
    }
}

export async function getBookData() {
  try {
    const books = await Book.find();
    return books;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteBook(id) {
  try {
    await Book.findByIdAndDelete(id)
  } catch (e) {
    console.log(e);
  }
}
