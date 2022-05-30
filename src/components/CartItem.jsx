import React from "react"

export const CartItem = ({ item }) => {
    return (
        <div className="book-item">
            <img alt={item.title} src={item.image} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
    )
}