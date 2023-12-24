
import React from 'react';
import { deleteBoat } from './API'; 
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzYjBlYjRmMy0xZjMzLTRkZTEtYjY4OS0wYjE4ZGYxYzMxOTMiLCJpZCI6IjNiMGViNGYzLTFmMzMtNGRlMS1iNjg5LTBiMThkZjFjMzE5MyIsInVzZXJuYW1lIjoiZGVuaXMiLCJpYXQiOjE3MDI3MDIyMDAsImV4cCI6MTcwNTI5NDIwMH0.UaFtozvExMdL-VPBIYdwmMIVERUoYySdMcBuiXKU2rM'
const DeleteBoat = ({ boatId, onBoatDeleted }) => {
  const handleDelete = async () => {
    try {
      const deletedBoat = await deleteBoat(apiKey, boatId);
      console.log('Deleted boat:', deletedBoat);
      if (deletedBoat.status === 'SUCCESS') {
        onBoatDeleted(boatId);
      }
    } catch (error) {
      console.error('Error deleting boat:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteBoat;
