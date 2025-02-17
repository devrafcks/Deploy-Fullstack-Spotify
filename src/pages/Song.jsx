import Player from "../components/Player";

const Song = () => {
    return (
        <div className="song">
            <div className="song__container">

                <div className="song__image-container">
                    <img src="https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7" alt="musica x" />
                </div>
            </div>

            
            <div className="song__bar">
                <div className="song__artist-image">
                    <img width={"85px"} height={"85px"} src="https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7" alt="Artista x" />
                </div>

                <Player/>
                <div>
                    <p className="song__name">Freak</p>
                    <p>Surf Curse</p>
                </div>
            </div>

                
        </div>
    );
}
export default Song;