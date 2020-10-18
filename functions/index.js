const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HaREVFRSp2HdY4HA4TV35FHYmR0P7mme0Rr4QXo3mFJfQL6zwPvmYEkBagLtFFOm6Jpvdn8NYqvragtAD07A2oh00amziCrg2"
);
// "pk_test_51HYfQGCjkfiKA7UUrdV8s099CZWHh0GSeHCQ0ZeZ8c4R4UqBwbMoD12NRHayHi2E9f8NgvH39cJRMHb5YDW5ENQI00CJlwbyI0"
// "sk_test_51HYfQGCjkfiKA7UUxcl6QvG8aZ9163CWLqux60fF7hw9xWGRIVh9B4rWKYoqKT9mfL1bzYI52DAK7cXzue6T5A3l00BEmp5mc7"

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request recieved !!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-7a943/us-central1/api
