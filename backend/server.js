import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use('/api/orders', orderRoute);

app.use(express.static(path.join(__dirname, '/../frontend/build')));

const stripe = require('stripe')('sk_test_qJOjfuDYkspmywFcdfiJd1EL00ajScXy4g');
const mongodbUrl = config.MONGODB_URL;
const endpointSecret = "whsec_AaHzAyhLdL4sPkRpSClEtCECoW4p4OnO";
const fulfillOrder = (session) => {
  // TODO: fill me in
  console.log("Fulfilling order", session);
}

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.post('/pay', async (req, res) => {
  const {email} = req.body;
  console.log(email);
  const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: {integration_check: 'accept_a_payment'},
      receipt_email: email,
    });

    res.json({'client_secret': paymentIntent['client_secret']})
})
  
app.post('/sub', async (req, res) => {
  const {email, payment_method} = req.body;

  const customer = await stripe.customers.create({
    payment_method: payment_method,
    email: email,
    invoice_settings: {
      default_payment_method: payment_method,
    }, 
  });

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: 'price_1IgFG1Ghivqy3UvBvzCpQOSh' }],
    expand: ['latest_invoice.payment_intent']
  });

  const status = subscription['latest_invoice']['payment_intent']['status'] 
  const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']

  res.json({'client_secret': client_secret, 'status': status});
})

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    // Simple deserialization:
    
    let event;

    // With signature verification:
    const payload = req.body;
    const sig = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ success: false });
      return;
    }

    const createOrder = (session) => {
      // TODO: fill me in
      console.log("Creating order", session);
    }
    
    const emailCustomerAboutFailedPayment = (session) => {
      // TODO: fill me in
      console.log("Emailing customer", session);
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        // Save an order in your database, marked as 'awaiting payment'
        createOrder(session);
  
        // Check if the order is paid (e.g., from a card payment)
        //
        // A delayed notification payment will have an `unpaid` status, as
        // you're still waiting for funds to be transferred from the customer's
        // account.
        if (session.payment_status === 'paid') {
          fulfillOrder(session);
        }
  
        break;
      }
  
      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object;
  
        // Fulfill the purchase...
        fulfillOrder(session);
  
        break;
      }
  
      case 'checkout.session.async_payment_failed': {
        const session = event.data.object;
  
        // Send an email to the customer asking them to retry their order
        emailCustomerAboutFailedPayment(session);
  
        break;
      }
    }

    res.json({ success: true });

    response.status(200);
  }
);


app.listen (config.PORT || 5000, () => {
    console.log (`Server started at PORT:${config.PORT}`)
})