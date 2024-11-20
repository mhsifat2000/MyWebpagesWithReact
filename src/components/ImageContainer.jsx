import React, { useState, useEffect } from 'react';
import classes from '../styles/ImageContainer.module.css'; // Import the CSS module

const ImageContainer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://picsum.photos/v2/list');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        {images.map((photoObject) => (
          <div key={photoObject.id} className={classes.imgContainerItem}>
            <img className={classes.img} src={photoObject.download_url} alt={photoObject.author} />
            <p>{photoObject.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
