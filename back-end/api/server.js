import express from 'express';
import { artistCollection, songCollection } from './connect.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

const welcomeMessage = "Available endpoints: '/api/artists' and '/api/songs'";

// Definir o caminho correto para o diretório 'dist'
const distPath = path.join(__dirname, '../../front-end/dist');

app.use(cors());

app.get('/api/', (req, res) => {
    res.send(welcomeMessage);
});

app.get('/api/artists', (req, res) => {
    try {
        res.send(artistCollection);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch artists' });
    }
});

app.get('/api/songs', (req, res) => {
    try {
        res.send(songCollection);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch songs' });
    }
});

// Usar o caminho absoluto para os arquivos estáticos
app.use(express.static(distPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
