import React,{useState} from 'react';
import './LikeButton.css';
import ThumbsUpIconWhite from '../../../assets/icons/thumbs_up_icon_white.svg'
import ThumbsUpIconBlack from '../../../assets/icons/thumbs_up_icon.svg'



const LikeButton = ({initialIsLiked,initialLikeCount}) => {
    const [isLiked,setIsLiked] = useState(initialIsLiked)
    const [likeCount, setLikeCount] = useState(initialLikeCount);

    console.log("initialisLiked: ",isLiked)
    console.log("initialcount: ",likeCount)


    const handleLikeClick = () => {
        setIsLiked(prevIsLiked =>{
            let newIsLiked = !prevIsLiked   
            setLikeCount(prevCount=>{
                return newIsLiked? prevCount+1:prevCount-1}
            );
            return newIsLiked;
        });
    };

return (
    <div className="thumbs-up" onClick={handleLikeClick}>
        <img src={isLiked?ThumbsUpIconBlack:ThumbsUpIconWhite}></img>
        <p>{likeCount}</p>                        
    </div>
  );
};
export default LikeButton; 