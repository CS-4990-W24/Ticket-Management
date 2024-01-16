import React, { useState, useEffect, useContext } from "react";
import Ticket from "@/components/Ticket";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/components/AuthenticationContext";

function Home() {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:3000/api/tickets")
            .then((response) => response.json())
            .then((data) => {
                console.log("Success fetching tickets:", data);
                setTickets(data);
            })
            .catch((error) => console.error("Error fetching tickets:", error));
        console.log(user)
    }, []);

    const handleCheckout = (ticket) => {
        console.log("Checking out", ticket);
        navigate("/Checkout", { state: { selectedTicket: ticket } });
    };

    return (
        <section>
            <h1>Home Page</h1>
            {tickets.map((ticket) => (
                <Ticket
                    key={ticket.TicketId}
                    ticket={ticket}
                    onCheckout={() => handleCheckout(ticket)}
                />
            ))}
        </section>
    );
}

export default Home;
