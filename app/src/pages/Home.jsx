import React, { useState, useEffect } from 'react';
import Ticket from "@/components/Ticket";

function Home() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/tickets')
            .then(response => response.json())
            .then(data => {
                console.log('Success fetching tickets:', data);
                setTickets(data);
            })
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);

    return (
        <section>
            <h1>Home Page</h1>
            {tickets.map(ticket => (
        <Ticket key={ticket.TicketId} ticket={ticket} />
))}
        </section>
    );
}

export default Home;
