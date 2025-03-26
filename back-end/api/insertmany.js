import {songsArray} from '../../front-end/src/assets/database/songs.js';
import {artistArray} from '../../front-end/src/assets/database/artists.js';
import { database } from './connect.js';

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = {...currentSongsObj}
    delete newSongsObj.id;
    return newSongsObj;
});

const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj}
    delete newArtistObj.id;
    return newArtistObj;
});

const responseSongs = await database.collection('songs').insertMany(newSongsArray)
const responseArtist = await database.collection('artists').insertMany(newArtistArray)

console.log(responseSongs);
console.log(responseArtist);