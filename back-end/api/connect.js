import {MongoClient} from "mongodb";

const URL = "mongodb+srv://host:Rafa2018!!@spotifyf.2jlg3.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyF"
const client = new MongoClient(URL);

const database = client.db("spotifyDev");
const artistCollection = await database.collection("artists").find({}).toArray();
const songCollection = await database.collection("songs").find({}).toArray();

export {artistCollection, songCollection, database};