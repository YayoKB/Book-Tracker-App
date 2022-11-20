import React, {useState} from 'react';

import BookData from '../data/BookData.json';
import BookNumbers from '../data/BookNumbers.json';

const BookContext = React.createContext();

export const BookProvider = ({children}) => {
  const [bookData, setBookData] = useState(BookData);
  const [bookNumbers, setBookNumbers] = useState(BookNumbers);
  const [bookCount, setBookCount] = useState(bookData.length);

  function increaseGenreCount(genreToIncrease) {
    let countSciFi = bookNumbers.nScifi;

    switch (genreToIncrease) {
      case 'scifi':
        setBookNumbers({...bookNumbers, nScifi: countSciFi + 1});
        break;

      case 'fantasy':
        setBookNumbers(bookNumbers.nFantasy++);
        break;

      case 'romance':
        setBookNumbers(bookNumbers.nFantasy++);
        break;

      case 'adventure':
        setBookNumbers(bookNumbers.nAdventure++);
        break;

      case 'mystery':
        setBookNumbers(bookNumbers.nMystery++);
        break;

      case 'horror':
        setBookNumbers(bookNumbers.nHorror++);
        break;

      case 'thriller':
        setBookNumbers(bookNumbers.nThriller++);
        break;

      case 'history':
        setBookNumbers(bookNumbers.nHistory++);
        break;

      case 'biography':
        setBookNumbers(bookNumbers.nBiography++);
        break;

      default:
        console.log('No valid genre added');
    }
  }

  function updateBooks(title, author, genre, year, pages) {
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

  return (
    <BookContext.Provider
      value={{
        bookData,
        setBookData,
        bookNumbers,
        setBookNumbers,
        bookCount,
        setBookCount,
        increaseGenreCount,
        updateBooks,
      }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
