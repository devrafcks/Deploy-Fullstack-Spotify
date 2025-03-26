import axios from 'axios';

const URL = 'http://localhost:3001';

const responseArtist = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export {responseArtist, responseSongs};


