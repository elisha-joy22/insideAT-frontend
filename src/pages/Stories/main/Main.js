import React from 'react';
import './Main.css';

import TileSection from '../../../layouts/tileSection/TileSection';
import StoryBox from '../../../components/Boxes/StoryBox/StoryBox';

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


let storyData1 = {
  ownerImageSrc:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sreejith-vijayan-iein092306-17-08-2017-11-38-42.jpg",
  ownerName:"Sreejith Vijayan",
  date:"12-05-2024",
  comment:"he process that RabbitMQ and client libraries go through in order to get a message from your application into RabbitMQ and from RabbitMQ into consumer applications can be complex. If you’re processing critical information, such as sales data, reliably delivering the canonical source of information about the sale should be a top priority. At the protocol level, the AMQP specification defines the semantics for client and broker to negotiate and speak to each other about the process for relaying your information. Oftentimes the lexicon defined in the AMQP specification bubbles its way up into RabbitMQ client libraries, with the classes and methods used by applications communicating with RabbitMQ mirroring the protocol-level classes and methods. Understanding how this communication takes place will help you learn not just the “how” of communicating with RabbitMQ but also the 'why'."
}

const StoryMain = () => {
  return (
    <div className="content">
      <StoryBox storyData={storyData1}/>
      <StoryBox storyData={storyData1}/>
      <StoryBox storyData={storyData1}/>
      <TileSection tilesData={tileData} tileSectionHeading={'Similar'} tilesPerPage={4} />
      
    </div>
  );
};

export default StoryMain;