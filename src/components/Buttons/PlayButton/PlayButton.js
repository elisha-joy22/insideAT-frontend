import React from 'react';
import './PlayButton.css';

const PlayButton = ({isPlaying}) => {
return (
    <div className='play-button'>
    {
        isPlaying?(
            <>
                <p >Pause</p>
                <span className="pause-icon">&#10074;&#10074;</span> 
            </>
        ):(
            <>
                <p >Play</p>
                <span className="play-icon">&#9658;</span> 
            </>
        )

    }
    </div>
  );
};
export default PlayButton;   