import React from "react";

import './StoryBox.css';
import '../../../assets/styles/fonts.css'
import LikeButton from "../../Buttons/LikeButton/LikeButton";



import moment from "moment";

const StoryBox = ({storyData})=>{

    return (
    <div className="storybox-container">
        <div className="story-section">
            <div className="top-layer">
                <div className="profile-picture-section">
                    <img 
                        src={storyData.ownerImageSrc}
                        alt={`${storyData.ownerName}-image`}
                        className="round-image2"
                    />
                </div>
                <p className="noto-sans-unique username">{storyData.ownerName}</p>
                <p className="date">{moment(storyData.date,'DD/MM/YYYY').fromNow()}</p>
            </div>
            <div className="story-layer">
                <p className="quattrocento-sans-regular">{storyData.comment}</p>
            </div>
            <div className="bottom-layer">
                <div className="reaction-section">
                    <LikeButton initialIsLiked={false} initialLikeCount={105}/>
                </div>
            </div>
        </div>
    </div>
)


};

export default StoryBox;

