import BookData from '../data/BookData.json';

export default function updateBooks(title, author, genre, year, pages) {
  BookData.push({
    bookID: BookData.length + 1,
    title: title,
    author: author,
    genre: genre,
    year: year,
    pages: pages,
  });

  return BookData;
}
