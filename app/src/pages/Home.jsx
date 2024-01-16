import React, { useState, useEffect, useContext } from "react";
import Ticket from "@/components/Ticket";
import { useNavigate } from "react-router-dom";
import { Grid, CircularProgress, Typography, Card } from "@material-ui/core";
import { UserContext } from "@/components/AuthenticationContext";

function Home() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/tickets")
            .then((response) => response.json())
            .then((data) => {
                setTickets(data);
                setLoading(false);
            })

            .catch((error) => {
                console.error("Error fetching tickets:", error);
                setLoading(false);
            });

    }, []);

    const handleCheckout = (ticket) => {
        navigate("/Checkout", { state: { selectedTicket: ticket } });
    };

    if (loading) return <CircularProgress />;

    if (tickets.length === 0) {
        return <Typography variant="h6">No tickets available</Typography>;
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Grid container spacing={2} justifyContent="center">
                {tickets.map((ticket) => (
                    <Grid item xs={2} sm={2} md={2} lg={2} key={ticket.TicketId}>
                        <Card style={{ width: "240px", height: "210px" }}>
                            <Ticket
                                ticket={ticket}
                                onCheckout={() => handleCheckout(ticket)}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Home;
