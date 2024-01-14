import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Container, Grid, IconButton, Paper, Tooltip, Typography, } from "@mui/material";
import { useLocation } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

export default function Checkout() {
    const [tickets, setTickets] = useState([])
    const location = useLocation();
    const selectedTicket = location.state?.selectedTicket;

    const handleCheckoutButton = () => {
        alert('sup');
    }
    
    // If user does not select a ticket before navigating to the checkout page
    if (!selectedTicket)
    {
        return (
            <>
                <Container maxWidth="md">
                    <Paper variant="outlined" elevation={24} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography variant='h4' align="center" fontFamily='Calibri' paddingBottom="20px" gutterBottom>
                            Checkout
                        </Typography>
                            <Alert severity="error">
                            Please select a ticket before returning to this page.
                            </Alert>
                        </Paper>
            </Container>
            </>
        )
    }

    // Page design for when user adds a ticket to their cart
    return (
        <>
            <Container maxWidth="md">
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        fontFamily="Calibri"
                        paddingBottom="20px"
                        gutterBottom
                    >
                        Checkout      
                        <Tooltip
                        title="Please note that cart details are not saved."
                        sx={{marginLeft:1}}
                        >
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Typography>

                    {/* Cart Details */}
                    <Grid container spacing={3}>
                            <React.Fragment key={selectedTicket.TicketId}> 
                                {/* Concert Details and Number of Tickets */}
                                <Grid item xs={9}>
                                    <Box
                                        textAlign="left"
                                        paddingTop="30px"
                                        paddingLeft="5px"
                                        fontFamily="Calibri"
                                        fontWeight="bold"
                                        fontSize="h5.fontSize"
                                    >
                                        {selectedTicket.title}
                                    </Box>

                                    <Box
                                        textAlign="left"
                                        paddingTop="5px"
                                        paddingBottom="20px"
                                        paddingLeft="5px"
                                        fontFamily="Calibri"
                                        fontWeight="500"
                                        fontSize="h6.fontSize"
                                    >
                                        Location: {selectedTicket.location} | Date: 
                                        {new Date(
                                            selectedTicket.date
                                        ).toLocaleDateString()}{" "}
                                        | Seat: {selectedTicket.Seat}
                                    </Box>
                                </Grid>

                                {/* Ticket Price */}
                                <Grid item xs={3}>
                                    <Box
                                        textAlign="center"
                                        paddingTop="40px"
                                        fontFamily="Calibri"
                                        fontSize="h6.fontSize"
                                    >
                                        Price: ${selectedTicket.Price}
                                    </Box>
                                </Grid>
                            </React.Fragment>
                        
                    </Grid>

                    {/* Submit Ticket Button */}
                    <Box textAlign="center" paddingTop="50px">
                        <Button
                        variant="contained"
                        onClick={handleCheckoutButton}
                        >
                            Submit Order
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

