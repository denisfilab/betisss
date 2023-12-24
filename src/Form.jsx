import React, { useState } from 'react';
import { purchaseBoat } from './API'; 
import './Form.css';
import BoatColor from './BoatColors';

const AddBoatForm = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    capacity: '',
    color: '',
  });
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.description || !form.capacity || !form.color) {
      setFormError(true);
      return;
    }
    try {
      const perahuData = {
        name: form.name,
        description: form.description,
        capacity: parseInt(form.capacity),
        color: form.color,
        bought_at: new Date().toISOString(),
      };

      await purchaseBoat(perahuData);
      console.log('Ship data submitted successfully!');
      setFormSuccess(true);
      setForm({
        name: '',
        description: '',
        capacity: '',
        color: '',
      });
      setFormError(false);
      window.location.reload();
    } catch (error) {
      console.error('Error sending ship data:', error);
      setFormError(true);
    }
  };

  return (
    <div className="container">
      <form className="boat-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name || ''} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={form.description || ''} onChange={handleInputChange} />
        </label>
        <label>
          Capacity:
          <input type="number" name="capacity" value={form.capacity || ''} onChange={handleInputChange} />
        </label>
        <label>
          <BoatColor handleColorChange={handleColorChange} />
        </label>
        <label>
          Is Sailing:
        <input
          type="checkbox"
          name="isSailing"
          checked={form.isSailing || false}
          onChange={handleInputChange}/>
         </label>
        {formError && <p>Error submitting form!</p>}
        {formSuccess && <p>Submitted!</p>}
        <button type="submit">Add Boat</button>
      </form>
    </div>
  );
};

export default AddBoatForm;


