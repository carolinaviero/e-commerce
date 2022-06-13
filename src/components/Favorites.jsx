import React from 'react';
import { FavoriteBookItem } from "./FavoriteBookItem"

export const Favorites = ({ favoriteBooks }) => {
    return (
        <div className="book-container">
            {favoriteBooks?.map(favoriteBook => (
                <FavoriteBookItem favoriteBook={favoriteBook} key={favoriteBook.isbn13} />
              ))}
        </div>
    )
}