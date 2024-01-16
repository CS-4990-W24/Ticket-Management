import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

function Ticket({ ticket, onCheckout }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <Card className="ticket">
            <CardContent>
                <Typography variant="h5" component="div">
                    {ticket.title}
                </Typography>
                <Typography color="text.secondary">
                    Price: {ticket.Price}
                </Typography>
                <Typography color="text.secondary">
                    Seat: {ticket.Seat}
                </Typography>
                <Typography color="text.secondary">
                    Location: {ticket.location}
                </Typography>
                <Typography color="text.secondary">
                    Date: {formatDate(ticket.date)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" startIcon={<ShoppingCart />} onClick={onCheckout}>
                    Checkout
                </Button>
            </CardActions>
        </Card>
    );
}

export default Ticket;
