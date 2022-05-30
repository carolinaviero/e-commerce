import React from "react"
import { CartItem } from "./CartItem"

export const Cart = ({ booksInCart, total }) => {
    return (
        <React.Fragment>
            <div>
                {booksInCart.map(book => (
                    <CartItem item={book} key={book.isbn13} />
                ))}
            </div>
            <h3>Total: ${total}</h3>
        </React.Fragment>
    )
}