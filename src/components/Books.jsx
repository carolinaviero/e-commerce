import { BookItem } from './BookItem';

export const Books = ({ books, handleAddToCart, handleAddToFavorites }) => {
    return (
        <div className="book-container">
            {books?.map(book => (
                <BookItem bookInfo={book} key={book.isbn13} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />
              ))}
        </div>
    )
}