import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/videos.routes';

const app = express();

app.set('port', process.env.BACKPORT || 8000); // port

app.use(morgan('dev')); // to view routes and http codes

app.use(cors()); // to get all petitions

app.use(express.json()); // json

app.use(express.urlencoded({ extended: false }));

app.use(router);

export default app;
