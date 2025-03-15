import SongItem from "./SongItem";
import PropTypes from 'prop-types';

const SongList = ({ songsArray }) => {
    return (
        <div className="song-list">
            {songsArray.slice(0, 5).map((currentSongObj, index) => (
            <SongItem {...currentSongObj} index={index} key={currentSongObj.id} />
            ))}
        </div>
    );
};
SongList.propTypes = {
    songsArray: PropTypes.array.isRequired,
};

export default SongList;

