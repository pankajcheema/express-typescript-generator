import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import "reflect-metadata";
import express from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import 'express-async-errors';
import BaseRouter from './routes';
import logger from '@shared/Logger';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}
app.use('/api', BaseRouter);
app.use((err, req, res, next) => {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: viewsDir });
});
export default app;
