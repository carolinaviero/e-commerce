export const Navbar = ({ total }) => {
    return (
        <div id="total">
           <h2>Cart: ${total.toFixed(2)}</h2>
        </div>
    )
}