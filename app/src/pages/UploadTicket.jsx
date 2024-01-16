import {Box, Button, Container, FormControl, Grid, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function UploadTicket() {
    const [Price, setPrice] = useState('');
    const [Seat, setSeat] = useState('');
    const[Status, setStatus] = useState(1);
    const [Title, setTitle] = useState('');
    const [Location, setLocation] = useState('');
    const [Date, setDate] = useState(dayjs('2023-01-01'));
    const navigate = useNavigate();
    const[amount, setAmount] = useState('');

    const handleSubmitClick = async() => {
        const ticketDetails = {Price, Seat, Status, Title, Location, Date};
        console.log(ticketDetails.Date);
        await fetch('http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/tickets', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticketDetails)
        })
        alert('Ticket successfully uploaded. Thank you!');
        navigate('/');
    }

    return (
        <>
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
                                value={Title}
                                onChange={e => setTitle(e.target.value)}
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
                                value={Location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </Grid>

                        {/* Seating position */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="ticket-position"
                                label="Seating Position"
                                variant="outlined"
                                fullWidth
                                value={Seat}
                                onChange={e => setSeat(e.target.value)}
                            />
                        </Grid>

                        {/* Concert date */}
                        <Grid item xs={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                    defaultValue={dayjs('2023-01-01')}
                                    label="Concert Date"
                                    onChange={e => setDate(e)}/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>

                        {/* Amount per ticket */}
                        <Grid item xs={8}>
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
                                value={Price}
                                onChange={e => setPrice(e.target.value)}
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