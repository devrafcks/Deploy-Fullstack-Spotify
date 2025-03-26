import express from 'express';
import { artistCollection, songCollection } from './connect.js';
import cors from 'cors';

const app = express();
const port = 3001;

const welcomeMessage = "Available endpoints: '/artists' and '/songs'";

app.use(cors());

app.get('/', (req, res) => {
    res.send(welcomeMessage);
});

app.get('/artists', (req, res) => {
    try {
        res.send(artistCollection);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch artists' });
    }
});

app.get('/songs', (req, res) => {
    try {
        res.send(songCollection);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch songs' });
    }
});

app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
