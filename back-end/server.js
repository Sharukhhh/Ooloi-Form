import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import dataRoute from './routes/route.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api' , dataRoute);


app.listen(5000 , () => {
    console.log('server on!');
});