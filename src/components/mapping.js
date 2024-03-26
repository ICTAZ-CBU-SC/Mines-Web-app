import React, { useState, useEffect } from 'react';

const Mapping = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    // Function to simulate movement
    const moveDot = () => {
      // Example: Update latitude and longitude every 30 seconds
      setInterval(() => {
        // Update latitude and longitude randomly (for demonstration purposes)
        setLatitude(prevLongitude => prevLongitude + 10);/*replace (Math.random()) with variables from firebase location */
        setLongitude(prevLongitude => prevLongitude + 10);/*replace (Math.random()) with variables from firebase location */
      }, 10000);
    };

    moveDot(); // Start moving the dot

    // Cleanup function to stop interval on unmount
    return () => clearInterval(moveDot);
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className="container">
      <div className="map-container" style={{ position: 'relative', width: '400px', height: '200px' }}>
        <div
          className="dot"
          style={{
            position: 'relative',
            top: `${latitude}%`, // Example: Offset by 50%
            left: `${longitude}%`, // Example: Offset by 50%
            backgroundColor: 'red',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
          }}
        ></div>
        <img
          src="./images/map.jpeg"
          alt="Map"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Mapping;
