import React, { useState, useEffect } from 'react';
import { fetchBoats } from './API'; 
import './BoatList.css'; 
import DeleteBoat from './DeleteBoat';
import Form from './Form'; 

const BoatList = () => {
  const [boats, setBoats] = useState([]);
  const [selectedBoatId, setSelectedBoatId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBoats();
        if (data && data.status === 'SUCCESS' && Array.isArray(data.daftarPerahu)) {
          setBoats(data.daftarPerahu);
        } else {
          console.error('Failed to fetch boats:', data);
        }
      } catch (error) {
        console.error('Error fetching boats:', error);
      }
    };

    fetchData();
  }, []);

  const handleBoatDeleted = (deletedBoatId) => {
    const updatedBoats = boats.filter((boat) => boat.id !== deletedBoatId);
    setBoats(updatedBoats);
  };


  return (
    <div className="boats-container">
      <h1 className="boats-title">Boats List</h1>
        <div className="boats-grid">
          {boats.length > 0 ? (
            boats.map((boat) => (
              <div key={boat.id} className="boat-box">
                {/* Boat details here */}
                <p>Boat Name: {boat.name}</p>
                <p>Description: {boat.description}</p>
                <p>Capacity: {boat.capacity}</p>
                <p>Color: {boat.color}</p>
                <p>Sailing status: {boat.isSailing}</p>
                <div className="button-container">
                  <button onClick={() => handleEdit(boat.id)}>Edit</button>
                  <DeleteBoat boatId={boat.id} onBoatDeleted={handleBoatDeleted} />
                </div>
              </div>
            ))
          ) : (
            <p>No boats available</p>
          )}
        </div>
      
    </div>
  );
};

export default BoatList;
