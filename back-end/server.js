import express from 'express';
import morgan from 'morgan';
import dataRoute from './routes/route.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use('/api' , dataRoute);


app.listen(5000 , () => {
    console.log('server on!');
});