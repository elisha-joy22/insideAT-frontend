import React from 'react';
import './Screen.css';
import '../../../../assets/styles/fonts.css'

import PlayButton from '../../../../components/Buttons/PlayButton/PlayButton';

const InsideTalksScreen = ({ backgroundimageUrl, videoInfo }) => {
  return (
    <div className="screen-container">
      <div 
        className="screen" 
        style={{ backgroundImage: `url(${backgroundimageUrl})` }}
      >
        <div className="banner-fade-left"></div>
        <div className="banner-fade-right"></div>
        
        <div className="video-info-container">
          <div className="video-info-image">
            <img src={videoInfo.imageUrl} alt={videoInfo.title} />
          </div>
          <div className="video-info-metadata">
            <div className="video-info-metadata-title">
              <h3 className="noto-sans-unique">{videoInfo.title}</h3>
            </div>
            <div className="video-info-metadata-language">
              <h4 className="hubballi-regular">Language: {videoInfo.language}</h4>
            </div>
            <div className="video-info-metadata-duration">
              <h4 className="hubballi-regular">Duration: {videoInfo.duration}</h4>
            </div>
            <div className="video-info-metadata-posted_date">
              <h4 className="hubballi-regular">Posted on : {videoInfo.posted_date}</h4>
            </div>
            <div className="vote-container">
              <h3 className="hubballi-regular">Upvotes: {videoInfo.upvotes}</h3>
            </div>
            <PlayButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideTalksScreen;
