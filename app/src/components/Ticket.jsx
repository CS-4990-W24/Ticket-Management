function Ticket({ ticket, onAddToCart, onCheckout }) {
    const handleAddToCart = () => {
        onAddToCart(ticket.TicketId);
    };

const handleCheckout = () => {
    onAddToCart(ticket.TicketId);
    onCheckout();
};

    return (
        <div className="ticket">
            <h2>Ticket ID: {ticket.TicketId}</h2>
            <p>Price: {ticket.Price}</p>
            <p>Seat: {ticket.Seat}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default Ticket;
