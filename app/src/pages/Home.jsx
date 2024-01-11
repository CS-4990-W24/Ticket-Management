import React, { useState, useEffect } from "react";
import Ticket from "@/components/Ticket";
import { useNavigate } from "react-router-dom";

function Home() {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/api/tickets")
            .then((response) => response.json())
            .then((data) => {
                console.log("Success fetching tickets:", data);
                setTickets(data);
            })
            .catch((error) => console.error("Error fetching tickets:", error));
    }, []);

    const handleAddToCart = (ticketId) => {
        console.log("Adding ticket to cart:", ticketId);
        navigate("/cart");
    };

    const handleCheckout = () => {
        console.log("Checking out");
        navigate("/Checkout");
    };

    return (
        <section>
            <h1>Home Page</h1>
            {tickets.map((ticket) => (
                <Ticket
                    key={ticket.TicketId}
                    ticket={ticket}
                    onAddToCart={handleAddToCart}
                    onCheckout={handleCheckout}
                />
            ))}
        </section>
    );
}

export default Home;
