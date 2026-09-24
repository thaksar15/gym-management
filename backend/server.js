require("dotenv").config({ override: true });

const Stripe = require("stripe");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
    res.send("Gym Management Backend is running!");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.post("/create-checkout-session", async (req, res) => {

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: "Gym Membership"
                    },
                    unit_amount: 200000
                },
                quantity: 1
            }
        ],
        mode: "payment",
        success_url: "http://localhost:3000/payment-success",
        cancel_url: "http://localhost:3000/payments"
    });

    res.json({
        url: session.url
    });
});

app.listen(process.env.PORT || 5000, () => {

    console.log("Server running on port " + (process.env.PORT || 5000));

});