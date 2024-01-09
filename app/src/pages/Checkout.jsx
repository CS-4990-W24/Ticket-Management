import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

export default function Checkout() {
    return (
        <>
            <Container maxWidth="md">
                <Paper variant="outlined" elevation={24} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography variant='h4' align="center" fontFamily='Calibri' paddingBottom="20px" gutterBottom>
                        Checkout
                    </Typography>

                    {/* Cart Details */}
                    <Grid container spacing={3}>
                        <Grid item xs = {9}>
                            <Box>
                                {/* Concert Details and Number of Tickets*/}
                                <Box
                                    textAlign="left"
                                    paddingTop="30px"
                                    paddingLeft="5px"
                                    fontFamily="Calibri"
                                    fontWeight="bold"
                                    fontSize="h5.fontSize">
                                        Rolling Loud | 10-Year Anniversary Tour | x3
                                </Box>
                                
                                {/* Concert Location, Date, and Position */}
                                <Box
                                    textAlign="left"
                                    paddingTop="5px"
                                    paddingBottom="20px"
                                    paddingLeft="5px"
                                    fontFamily="Calibri"
                                    fontWeight="500"
                                    fontSize="h6.fontSize">
                                        Location: Inglewood | Date: Q1 2024 | Position: General Admission
                                </Box>
                            </Box>
                        </Grid>

                        {/* Ticket Price */}
                        <Grid item xs = {3}>
                            <Box
                                textAlign="center"
                                paddingTop="40px"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    $600.00
                            </Box>
                        </Grid>

                        {/* Misc. Fees to add space*/}
                        {/* Shipping and Handling */}
                        <Grid item xs = {9}>
                            <Box
                                textAlign="left"
                                paddingLeft="5px"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    Shipping and handling:
                            </Box>
                        </Grid>

                        <Grid item xs = {3}>
                            <Box
                                textAlign="center"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    $20.00
                            </Box>
                        </Grid>

                        {/* Website Fee */}
                        <Grid item xs = {9}>
                            <Box
                                textAlign="left"
                                paddingLeft="5px"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    Finders fee:
                            </Box>
                        </Grid>

                        <Grid item xs = {3}>
                            <Box
                                textAlign="center"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    $10.00
                            </Box>
                        </Grid>

                        {/* Taxes */}
                        <Grid item xs = {9}>
                            <Box
                                textAlign="left"
                                paddingLeft="5px"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    Tax:
                            </Box>
                        </Grid>

                        <Grid item xs = {3}>
                            <Box
                                textAlign="center"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    $35.00
                            </Box>
                        </Grid>

                        {/* Total */}
                        <Grid item xs = {9}>
                            <Box
                                textAlign="left"
                                paddingLeft="5px"
                                fontFamily="Calibri"
                                fontSize="h6.fontSize">
                                    Total:
                            </Box>
                        </Grid>

                        <Grid item xs = {3}>
                            <Box
                                textAlign="center"
                                fontFamily="Calibri"
                                fontWeight="bold"
                                fontSize="h6.fontSize">
                                    $665.00
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Submit ticket button */}
                    <Box textAlign='center' paddingTop="50px">
                        <Button
                        variant="contained"
                        >
                            Submit Ticket
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}
