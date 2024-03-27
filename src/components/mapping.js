import React, { useState, useEffect } from 'react';

const Mapping = () => {
  const [workers, setWorkers] = useState([
    {
      workerId: 1,
      location: {
        latitude: 0,
        longitude: 0,
      },
      health: {
        heartRate: 'okay', // Assuming default health status is okay
      },
    },
    {
      workerId: 2,
      location: {
        latitude: 10,
        longitude: 10,
      },
      health: {
        heartRate: 'questionable', // Assuming default health status is okay
      },
    },
    {
      workerId: 3,
      location: {
        latitude: 60,
        longitude: 20,
      },
      health: {
        heartRate: 'critical', // Assuming default health status is okay
      },
    },
    // Add more workers as needed
  ]);

  useEffect(() => {
    const moveDots = () => {
      setInterval(() => {
        // Update worker locations randomly (for demonstration purposes)
        const updatedWorkers = workers.map(worker => ({
          ...worker,
          location: {
            latitude: worker.location.latitude + 10, // Replace with firebase location value
            longitude: worker.location.longitude + 10, // Replace with firebase location value
          },
        }));
        setWorkers(updatedWorkers);
      }, 10000);
    };

    moveDots();

    return () => clearInterval(moveDots);
  }, [workers]);

  return (
    <div className="container">
      <div className="map-container" style={{ position: 'relative', width: '400px', height: '200px' }}>
        {workers.map(worker => (
          <div
            key={worker.workerId}
            className="dot"
            style={{
              position: 'absolute',
              top: `${worker.location.latitude}%`,
              left: `${worker.location.longitude}%`,
              backgroundColor: worker.health.heartRate === 'okay' ? 'green' : worker.health.heartRate === 'questionable' ? 'yellow' : 'red',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Mapping;

