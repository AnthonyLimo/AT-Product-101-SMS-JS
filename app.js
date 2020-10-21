// In this tutorial, we'll look at how we can recieve
// SMS using a callback URL/webhook. We'll be using
// Express as our server

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, I listen for incoming SMS messages');
});

app.post('/incoming-messages', (req, res) => {
    console.log(req.body);
    message = req.body['text'];
    // Change the code below to save to a DB or run some
    // operations based on the message received
    res.send(message);
});

app.listen(3000, () => {
    console.log('App is up and running');
});