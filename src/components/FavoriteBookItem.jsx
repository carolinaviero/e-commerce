import React from "react"

export const FavoriteBookItem = ({ favoriteBook }) => {
    return (
        <div className="book-item">
            <img alt={favoriteBook.title} src={favoriteBook.image} />
            <h3>{favoriteBook.title}</h3>
            <p>{favoriteBook.price}</p>
        </div>
    )
}