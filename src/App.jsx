import { useEffect, useState } from 'react';
import { BookItem } from './components/BookItem';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [booksInCart, setBooksInCart] = useState([]);
  const [price, setPrice] = useState(0);

  const fetchData = () => {
    fetch('https://api.itbook.store/1.0/new')
    .then(res => res.json())
    .then(data => setData(data.books))
  }

  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book])
  }

  const handleAddToCart = (bookInfo) => {
    setPrice(price + Number(bookInfo.price.substring(1)))

    let newCart = [...booksInCart];
    let isInCart = newCart.find(book => book.isbn13 === bookInfo.isbn13);
    if (!isInCart) {
      isInCart = { ...bookInfo, quantity: 1 }
      newCart.push(isInCart)
    }

    setBooksInCart(newCart)
    console.log('booksInCart', booksInCart)
  }
  
  useEffect(fetchData, [])

  
  return (
    <div className="App">
      <Navbar total={price} />
      <h1>Book Store</h1>
      <div className="book-container">
        {data.map(book => (
          <BookItem bookInfo={book} key={book.isbn13} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
