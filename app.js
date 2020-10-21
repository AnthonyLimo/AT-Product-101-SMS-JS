// In this tutorial, we'll look at how we can recieve
// SMS using a callback URL/webhook. We'll be using
// Express as our server

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, I listen for delivery reports');
});

app.post('/incoming-messages', (req, res) => {
    //console.log(req.body);
    status = req.body['status'];

    if (status == "Sent") {
        res.send("Everything is okay");
    } else {
        res.send("Something went wrong");
    }
});

app.listen(3000, () => {
    console.log('App is up and running');
});