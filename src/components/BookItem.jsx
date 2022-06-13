import { useState } from 'react';

export const BookItem = ({ bookInfo, handleAddToFavorites, handleAddToCart }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
        console.log(bookInfo)
        handleAddToFavorites(bookInfo, isFavorite)
    }

    return (
        <div className="book-item">
            <p onClick={handleClick} className="favorite">{isFavorite ? '💙' : '🤍'}</p>
            <img alt={bookInfo.title} src={bookInfo.image} />
            <h3>{bookInfo.title}</h3>
            <p>{bookInfo.price}</p>
            <button onClick={() => handleAddToCart(bookInfo)}>Add to cart</button>
        </div>
    )
}