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

const mongodbUrl = config.MONGODB_URL;

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



app.listen (config.PORT || 5000, () => {
    console.log (`Server started at PORT:${config.PORT}`)
})