import axios from 'axios';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '/api';

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export { responseArtist, responseSongs };
