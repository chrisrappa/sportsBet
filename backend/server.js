import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import postRoute from './routes/postRoute';
import sportsApi from './routes/sportsApi';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
// app.use('/api/sportsApi', sportsApi);

app.use(express.static(path.join(__dirname, '/../frontend/build')));

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));


app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


app.listen (config.PORT || 5000, () => {
    console.log (`Server started at PORT:${config.PORT}`)
})