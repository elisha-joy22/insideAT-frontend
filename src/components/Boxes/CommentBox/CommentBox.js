import React from "react";
import './CommentBox.css';
import '../../../assets/styles/fonts.css'

import moment from "moment";

const CommentBox = ({commentData})=>{

    return (
    <div className="commentbox-container">
        <div className="profile-picture-section">
            <img 
                src={commentData.ownerImageSrc}
                alt={`${commentData.ownerName}-image`}
                className="round-image2"
            />
            {console.log(commentData.ownerImageSrc)}
        </div>
        <div className="comment-section">
            <div className="top-layer">
                <p className="name noto-sans-unique">{commentData.ownerName}</p>
                <p className="date">{moment(commentData.date,'DD/MM/YYYY').fromNow()}</p>
            </div>
            <div className="comment-layer">
                <p className="quattrocento-sans-regular">{commentData.comment}</p>
            </div>
            <div className="bottom-layer">

            </div>
        </div>
    </div>
)


};

export default CommentBox;

