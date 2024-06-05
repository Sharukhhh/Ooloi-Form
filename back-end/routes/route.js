import express from 'express'
import { getJsonData } from '../controllers/dataHandler.js';
const route = express.Router();


route.get('/data' , getJsonData);

export default route;