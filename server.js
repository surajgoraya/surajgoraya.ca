/**
 * File: server.js
 * 
 * Server.js serves as the nodejs handler for all the svelte kit stuff.
 */
import { handler } from './build/handler.js';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import dotenv from 'dotenv'; dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ORIGIN_URL = 'https://surajgoraya.ca';

app.use(cors({ origin: process.env.DEV ? '*' : ORIGIN_URL }));
app.use(helmet());
app.enable('trust proxy');

app.use((req, res, next) => {
    if (req.secure || process.env.DEV) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

//Use sveltekit for all other things.
app.use(handler);

app.listen(PORT, () => {
	console.log(`surajgoraya.ca started on port ${PORT}`);
});