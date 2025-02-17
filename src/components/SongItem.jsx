import { Link } from "react-router-dom";

const SongItem = () => {
    return (
        <Link to="/song/1" className="song-item">
            <div className="song-item__number-album">
                <p>1</p>
                
                <div className="song-item__album">
                    <img className="song-item__image" src="https://i.scdn.co/image/ab67616d00001e02cc97936e407973a912dd75cb" alt="Musica" />

                    <p className="song-item__name">Imagina - Ao Vivo</p>
                </div>
            </div> 
            <p>02:30</p>
            
        </Link>
    );
};

export default SongItem;