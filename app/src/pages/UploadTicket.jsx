import {Box, Button, Container, CssBaseline, FormControl, Grid, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function UploadTicket() {
    const [concertName, setConcertName] = useState('');
    const [concertLocation, setConcertLocation] = useState('');
    const [concertDate, setConcertDate] = useState('');
    const [ticketPosition, setTicketPosition] = useState('');
    const [ticketAmount, setTicketAmount] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');

    const handleSubmitClick = () => {
        alert(`name: ${concertName}\nlocation: ${concertLocation}\ndate: ${concertDate}\nposition: ${ticketPosition}\namount: ${ticketAmount}\nprice: ${ticketPrice}`)
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant='h4' align="left" paddingTop="15px" fontFamily='Calibri' gutterBottom>
                    Upload Ticket Details
                </Typography>
                <Box sx={{ 
                    flexGrow: 1,
                    height: '50vh'
                }}>
                    {/* Concert name */}
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="concert-name"
                                label="Concert Name"
                                variant="outlined"
                                fullWidth
                                value={concertName}
                                onChange={e => setConcertName(e.target.value)}
                            />
                        </Grid>

                        {/* Concert location */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="concert-location"
                                label="Concert Location"
                                variant="outlined"
                                fullWidth
                                value={concertLocation}
                                onChange={e => setConcertLocation(e.target.value)}
                            />
                        </Grid>

                        {/* Concert date */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="concert-date"
                                label="Concert Date"
                                variant="outlined"
                                fullWidth
                                value={concertDate}
                                onChange={e => setConcertDate(e.target.value)}
                            />
                        </Grid>

                        {/* Seating position */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="ticket-position"
                                label="Seating Position"
                                variant="outlined"
                                fullWidth
                                value={ticketPosition}
                                onChange={e => setTicketPosition(e.target.value)}
                            />
                        </Grid>

                        {/* Number of tickets */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="ticket-amount"
                                label="Number of Tickets"
                                variant="outlined"
                                fullWidth
                                value={ticketAmount}
                                onChange={e => setTicketAmount(e.target.value)}
                            />
                        </Grid>

                        {/* Amount per ticket */}
                        <Grid item xs={6}>
                                <FormControl
                                fullWidth
                                required
                                id="ticket-price"
                                variant="standard"
                                >
                                <InputLabel htmlFor="outlined-adornment-amount">Amount per Ticket</InputLabel>
                                <Input
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                value={ticketPrice}
                                onChange={e => setTicketPrice(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* Submit ticket button */}
                    <Box textAlign='center' paddingTop="50px">
                        <Button
                        variant="contained"
                        onClick={handleSubmitClick}
                        >
                            Submit Ticket
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
  }