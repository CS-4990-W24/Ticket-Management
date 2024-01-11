const express = require("express");
const ticketRoutes = require('./routes/ticketRoutes');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());


app.use(express.json());

app.use('/api', ticketRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
