import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
    const audioPlayer = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const playPause = () => {
        if (!audioPlayer.current) return;

        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const formatTime = (timeInSeconds) => {
        if (isNaN(timeInSeconds)) return "00:00";
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
        const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        const audio = audioPlayer.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("timeupdate", updateTime);
        return () => {
            audio.removeEventListener("timeupdate", updateTime);
        };
    }, []);

    return (
        <div className="player">
            <div className="player__controllers">
                <Link to={`/song/${randomIdFromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon 
                    className="player__icon player__icon--play" 
                    icon={isPlaying ? faCirclePause : faCirclePlay} 
                    onClick={playPause} 
                />
                
                <Link to={`/song/${randomId2FromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
                </Link>
            </div>

            <div className="player__progress">
                <p>{formatTime(currentTime)}</p>
                <div className="player__bar">
                    <div className="player__bar-progress" style={{ width: `${(currentTime / audioPlayer.current?.duration) * 100}%` }}>
                    </div>
                </div>
                <p>{duration}</p>
            </div>

            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    );
};

Player.propTypes = {
    duration: PropTypes.string.isRequired,
    randomIdFromArtist: PropTypes.string.isRequired,
    randomId2FromArtist: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
};

export default Player;
