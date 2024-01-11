function Ticket({ ticket }) {
    return (
        <div className="ticket">
            <h2>Ticket ID: {ticket.TicketId}</h2>
            <p>Price: {ticket.Price}</p>
            <p>Seat: {ticket.Seat}</p>
        </div>
    );
}

export default Ticket;
