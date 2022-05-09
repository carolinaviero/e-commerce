import { useEffect, useState } from 'react';
import { BookItem } from './components/BookItem';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const fetchData = () => {
    fetch('https://api.itbook.store/1.0/new')
    .then(res => res.json())
    .then(data => setData(data.books))
  }

  const handleAddToFavorites = (book) => {
    console.log('hello from handleAddToFavorites on App.js')
    setFavoriteBooks([...favoriteBooks, book])
  }
  
  useEffect(fetchData, [])

  console.log('favoriteBooks', favoriteBooks)
  
  return (
    <div className="App">
      <h1>Book Store</h1>
      <div className="book-container">
        {data.map(book => (
          <BookItem bookInfo={book} key={book.isbn13} handleAddToFavorites={handleAddToFavorites} />
        ))}
      </div>
    </div>
  );
}

export default App;
