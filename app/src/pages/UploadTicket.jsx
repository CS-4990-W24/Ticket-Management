import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {Button, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';

export default function Checkout() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
            <Typography variant='h4' align="left" paddingTop="15px" fontFamily='Calibri' gutterBottom>
                Upload Ticket Details
            </Typography>
            <Box sx={{ 
                // outline: 1,
                // outlineColor:'black',
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
                            />
                          </FormControl>
                    </Grid>
                </Grid>

                {/* Submit ticket button */}
                <Box textAlign='center' paddingTop="50px">
                    <Button
                    variant="contained"
                    onClick={() =>{
                        alert('Ticket has been submitted!');
                    }}
                    >
                        Submit Ticket
                    </Button>
                </Box>
            </Box>
        </Container>
      </React.Fragment>
    );
  }