import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function Checkout() {
    const location = useLocation();
    const selectedTicket = location.state?.selectedTicket;

    console.log(selectedTicket);

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
                                        $ Price: {selectedTicket.Price}
                                    </Box>
                                </Grid>
                            </React.Fragment>
                        
                    </Grid>

                    {/* Submit Ticket Button */}
                    <Box textAlign="center" paddingTop="50px">
                        <Button variant="contained">Submit Ticket</Button>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default Checkout;
