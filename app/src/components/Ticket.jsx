function Ticket({ ticket, onCheckout }) {

const handleCheckout = () => {
    onCheckout();
};

    return (
        <div className="ticket">
            <h2>{ticket.title}</h2>
            <p>Price: {ticket.Price}</p>
            <p>Seat: {ticket.Seat}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default Ticket;
