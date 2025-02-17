import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import PropTypes from 'prop-types';

const Main = ({ type }) => {
    return (
        <main className="main">
            {type === "Artists" || type === undefined ? <ItemList title="Artistas" items={5} itemsArray={artistArray || []} path="/artists" idPath="/artist" /> : <></>}
            {type === "Songs" ||  type === undefined ? <ItemList title="Músicas" items={12} itemsArray={songsArray || []} path="/songs" idPath="/song" /> : <></>}
        </main>
    );
};
Main.propTypes = {
    type: PropTypes.string,
};

export default Main;
