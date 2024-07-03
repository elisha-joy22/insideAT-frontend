import React from "react";
import './CommentBoxSection.css';
import '../../assets/styles/fonts.css';

import CommentBox from "../../components/Boxes/CommentBox/CommentBox";


const commentData = [
    {ownerImageSrc:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anarkali-marikkar-2026913-1680261205.jpg",
      ownerName:"Anarkali Marakkar",
      comment:"Awesome job!! The App component passes the commentData object as a prop to the CommentBox component.This way, the CommentBox component receives the commentData as props and can use it to render the comment information correctly.",
      date:"27/05/2024"
    },
    {ownerImageSrc:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anarkali-marikkar-2026913-1680261205.jpg",
      ownerName:"Anarkali Marakkar2",
      comment:"Awesome job!! The App component passes the commentData object as a prop to the CommentBox component.This way, the CommentBox component receives the commentData as props and can use it to render the comment information correctly.",
      date:"03/07/2024"
    },
    {ownerImageSrc:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anarkali-marikkar-2026913-1680261205.jpg",
      ownerName:"Anarkali Marakkar2",
      comment:"Awesome job!! The App component passes the commentData object as a prop to the CommentBox component.This way, the CommentBox component receives the commentData as props and can use it to render the comment information correctly.",
      date:"03/07/2024"
    }    
  ]

const CommentBoxSection = ({title,maxCommentsNum}) => {
    return(
      <div className="commentboxsection-container">
        <div className="commentboxsection-header " >
          <h2>{title}</h2>
          <h4>See all</h4>
        </div>
        <div className="commentboxsection">
            {commentData.slice(0, Math.min(commentData.length, maxCommentsNum))
            .map((data,index)=>{
                  return <CommentBox commentData={data}/>
                }
            )}
        </div>
      </div>
    );
};

export default CommentBoxSection;