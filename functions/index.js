const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HZuu8L2Eb4HEaVe9iVgWHcbE3c9kEEuVI6ZSskMHNLQorXPDOpwUgFnWjBruSfxSPa7XmaWIhkNpbv9hXetzQMw00wsdW5TY4')


// API

// App config
const app = express();

// Middlewares 
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req,res) => res.status(200).send('Hello world!'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/ema-jhon-22188/us-central1/api


// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
