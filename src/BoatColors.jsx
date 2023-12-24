import React, { useState, useEffect } from 'react';
import { getBoatColors } from './API'; 

const BoatColor = ({ handleColorChange }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const fetchedColors = await getBoatColors();
        setColors(fetchedColors);
      } catch (error) {
        console.error('Error fetching boat colors:', error);
      }
    };

    fetchColors();
  }, []);

  return (
    <label>
      Color:
      <select name="color" onChange={handleColorChange}>
        <option key="default" value="">Select Color</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </label>
  );
};

export default BoatColor;
