import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, artist, idPath }) => {
    const itemUrl = idPath && id ? `${idPath}/${id}` : "#"; 

    return (
        <Link to={itemUrl} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img 
                        className="single-item__image" 
                        src={image} 
                        alt={name} 
                        loading="lazy" 
                    />
                </div>
                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
            </div>

            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">{name}</p>
                </div>
                <p className="single-item__type">{artist || "Artista"}</p> 
            </div>
        </Link>
    );
};

SingleItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    artist: PropTypes.string,
    idPath: PropTypes.string.i
};

export default SingleItem;