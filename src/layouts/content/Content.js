import React from 'react';
import './Content.css';

import InsideTalksScreen from '../../pages/InsideTalks/Screen/Screen';
import InsideTalksParticipants from '../../pages/InsideTalks/Participants/Participants';
import TileSection from '../tileSection/TileSection';
import CommentBoxSection from '../commentBoxSection/CommentBoxSection';

const tileData = [
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA4MDggVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401459-psqzgtddzj-portrait.jpg',
    title: 'Tile Title 1',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMzQ5LjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg',
    title: 'Tile Title 2',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA0LjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00400655-pwdwncsrvr-portrait.jpg',
    title: 'Tile Title 3',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402053-pzjzctsmyy-portrait.jpg',
    title: 'Tile Title 4',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA1SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398266-femwrqnkwn-portrait.jpg',
    title: 'Tile Title 5',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg',
    title: 'Tile Title 6',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyMC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-fchlbmjvwh-portrait.jpg',
    title: 'Tile Title 7',
  },
  // Add more tiles as needed
];

const Content = () => {
  return (
    <div className="content">
      <InsideTalksScreen 
        backgroundimageUrl="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kalki-2898-ad-et00352941-1718275859.jpg"
        videoInfo={{
          imageUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
          title:"Kalki 28980AD",
          duration:"2h 20m",
          genre:["Tech","AWS","DevOps"],
          posted_date:"21-05-223",
          language:"Malayalam",
          upvotes:21000,
          description:"Wrongfully suspended while pursuing the culprit in a missing persons case, a cop seeks redemption — and justice — when he gets a new assignment.",
          }}
      />
      <InsideTalksParticipants/>
      <CommentBoxSection title='Responses' maxCommentsNum={3}/>
      <TileSection tilesData={tileData} tileSectionHeading={'Similar'} tilesPerPage={4} />
      
    </div>
  );
};
//<TileSection tilesData={tileData} tileSectionHeading={'Tech Talks'} />

export default Content;
