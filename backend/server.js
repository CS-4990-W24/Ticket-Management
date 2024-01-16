const express = require("express");
const ticketRoutes = require('./routes/ticketRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());


app.use(express.json());

app.use('/api', ticketRoutes);
app.use('/api', checkoutRoutes);
app.use('/api', uploadRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
