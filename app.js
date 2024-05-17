 import express from 'express';
import cors from 'cors';
import { menuItems, coffeeAlternatives } from './data.js';

// Create an Express application
const app = express();

app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send({
        menuItems, coffeeAlternatives
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
