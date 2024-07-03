import React from 'react';
import './Tile.css';

const Tile = ({imageSrc, title, description, tileImageShape})=>{
    return (
        <div className='tile'>
            <img 
                src={imageSrc}
                alt={`${title}-image`}
                className={`tile-image ${tileImageShape === 'round' ? 'round-image' : ''}`}
            />
            <h3 className='tile-title'>{title}</h3>
            <p className='tile-description'>{description}</p>
        </div>
    )
};


export default Tile;