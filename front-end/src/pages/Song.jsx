import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
    const { id } = useParams();
    const songObj = songsArray.find((song) => song._id === id);


    const artistObj = artistArray.find((artist) => artist.name === songObj.artist);

    const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artistObj.name);

    const randomIndex = Math.floor(Math.random() * ( songsArrayFromArtist.length - 1));
    const randomIndex2 = Math.floor(Math.random() * ( songsArrayFromArtist.length - 1));
    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src={songObj.image} alt={`Música ${songObj.name}`} />
                </div>
            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistObj?._id || 1}`} className="song__artist-image">
                    <img 
                        width="85px" 
                        height="85px" 
                        src={artistObj?.image || "https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7"} 
                        alt={artistObj?.name || "Artista desconhecido"} 
                    />
                </Link>

                <Player duration={songObj.duration} audio={songObj.audio} randomIdFromArtist={randomIdFromArtist} randomId2FromArtist={randomId2FromArtist} />
                <div>
                    <p className="song__name">{songObj.name}</p>
                    <p>{artistObj?.name || "Artista desconhecido"}</p>
                </div>
            </div>
        </div>
    );
};

export default Song;
