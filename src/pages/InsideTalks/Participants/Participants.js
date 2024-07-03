import React from 'react';
import './Participants.css';

import TileSection from '../../../layouts/tileSection/TileSection';



const tileData = [
  {
    imageSrc: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg',
    title: 'PR Abhas',
    description: 'Tech Lead at Google',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg',
    title: 'Deepika P',
    description: 'PRO at Google',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bachchan-138-12-09-2017-02-34-37.jpg',
    title: 'A Bachan',
    description: 'CEO at Facebook',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402053-pzjzctsmyy-portrait.jpg',
    title: 'Tile Title 4',
    description: 'This is an example Tile content 4.',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA1SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398266-femwrqnkwn-portrait.jpg',
    title: 'Tile Title 5',
    description: 'This is an example Tile content 5.',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg',
    title: 'Tile Title 6',
    description: 'This is an example Tile content 6.',
  },
  {
    imageSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyMC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-fchlbmjvwh-portrait.jpg',
    title: 'Tile Title 7',
    description: 'This is an example Tile content 7.',
  },
  // Add more tiles as needed
];



const InsideTalksParticipants = () => {
  return (
    <div className="content">
        <TileSection 
            tilesData={tileData} 
            tileSectionHeading={'Participants'}
            tileImageShape="round"
            tilesPerPage={5}/>        
    </div>
  );
};
//TileSection tilesData={tileData} tileSectionHeading={'Tech Talks'} />

export default InsideTalksParticipants;
