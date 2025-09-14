// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use('/', express.static('public'));
// app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 90
        },
        {
            title: 'Rent',
            budget: 110
        },
        {
            title: 'Grocery',
            budget: 200
        },
    ]
};

app.get('/hello', (req, res) => {
    res.send("Hello World!, This is Pavithra's Personal Budget homepage");
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});

