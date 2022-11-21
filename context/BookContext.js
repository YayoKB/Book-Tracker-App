import React, {useState} from 'react';

import BookNumbers from '../data/BookNumbers.json';

const BookContext = React.createContext();

export function BookProvider({children}) {
  const [bookData, setBookData] = useState([]);
  const [bookNumbers, setBookNumbers] = useState(BookNumbers);
  const [bookCount, setBookCount] = useState(0);

  const increaseGenreCount = genreToIncrease => {
    setBookNumbers(prevState => {
      switch (genreToIncrease) {
        case 'Science Fiction':
          return {...prevState, nScifi: prevState.nScifi + 1};
          break;
        case 'Fantasy':
          return {...prevState, nFantasy: prevState.nFantasy + 1};
          break;
        case 'Romance':
          return {...prevState, nRomance: prevState.nRomance + 1};
          break;
        case 'Adventure':
          return {...prevState, nAdventure: prevState.nAdventure + 1};
          break;
        case 'Mystery':
          return {...prevState, nMystery: prevState.nMystery + 1};
          break;
        case 'Horror':
          return {...prevState, nHorror: prevState.nHorror + 1};
          break;
        case 'Thriller':
          return {...prevState, nThriller: prevState.nThriller + 1};
          break;
        case 'History':
          return {...prevState, nHistory: prevState.nHistory + 1};
          break;
        case 'Biography':
          return {...prevState, nBiography: prevState.nBiography + 1};
          break;
        default:
          return console.alert('No valid genre to increase.');
      }
    });
  };

  const updateBooks = (id, title, author, genre, year, pages) => {
    setBookData(prevState => [
      ...prevState,
      {id, title, author, genre, year, pages},
    ]);
  };

  const incBookCount = () => {
    setBookCount(prevState => prevState + 1);
  };

  return (
    <BookContext.Provider
      value={{
        bookData,
        bookNumbers,
        bookCount,
        incBookCount,
        increaseGenreCount,
        updateBooks,
      }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
