import React, {useState} from 'react';
import './CircleImage.css'

export const CircleImage = ({ imageUrl} : { imageUrl : string }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`circle ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        border: '8px solid #6923ff',
        width: '175px',
        height: '175px',
        margin: '0 auto'
    }}
    >
      <img src={imageUrl} alt="Profile Pic" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
    </div>
  );
}

export default CircleImage;