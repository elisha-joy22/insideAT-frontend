import React, { useState } from 'react';
import Tile from '../../components/Tiles/Tile/Tile';
import './TileSection.css';

const TileSection = ({ tilesData, tileSectionHeading, tileImageShape, tilesPerPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTiles = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + tilesPerPage, tilesData.length - tilesPerPage));
  };

  const prevTiles = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - tilesPerPage, 0));
  };

  const displayedTiles = tilesData.slice(currentIndex, currentIndex + tilesPerPage);

  return (
    <div className="tile-section">
        <div className="tile-section-header">
            <h2>{tileSectionHeading}</h2>
            <h4>See all </h4>
        </div>
        <div className="tile-section-container">
            <div className="tile-navigation">
                <button onClick={prevTiles} disabled={currentIndex === 0}>&#9664;</button>
            </div>
            <div className="tiles">
                {displayedTiles.map((tile, index) => (
                <Tile
                    key={index}
                    imageSrc={tile.imageSrc}
                    title={tile.title}
                    description={tile.description}
                    tileImageShape={tileImageShape}
                />
                ))}
            </div>
            <div className="tile-navigation">
                <button onClick={nextTiles} disabled={currentIndex + tilesPerPage >= tilesData.length}>&#9654;</button>
            </div>
        </div>
    </div>
  );
};

export default TileSection;
