const BASE_URL = 'https://oprec-betis-be.up.railway.app';

const apiKey = ''
export const fetchBoats = async () => {
  try {
    const response = await fetch(`${BASE_URL}/perahu`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error fetching boats:', error);
    return { status: 'FAILED', message: error.message }; 
  }
};


export const purchaseBoat = async (perahuData) => {
  try {
    const response = await fetch('https://oprec-betis-be.up.railway.app/perahu', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(perahuData),
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to make the purchase');
  }
};


export const deleteBoat = async (apiKey, idPerahu) => {
    try {
      const response = await fetch(`${BASE_URL}/perahu/${idPerahu}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error deleting boat:', error);
      return { status: 'FAILED', message: error.message }; 
    }
  };
    

export const getBoatColors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/perahu/warna`);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    console.log(data); 
    return data.daftarWarna;
  } catch (error) {
    console.error('Error fetching boat colors:', error);
    return []; 
  }
};


export const editBoat = async (apiKey, idPerahu, perahuData) => {
  try {
    const response = await fetch(`${BASE_URL}/perahu/${idPerahu}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(perahuData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error editing boat:', error);
    return { status: 'FAILED', message: error.message }; 
  }
};

export const fetchBoatById = async (idPerahu) => {
  try {
    const response = await fetch(`${BASE_URL}/perahu/${idPerahu}`, {
      headers: {
        Authorization: 'Bearer ${apiKey}', 
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        return data.perahu;
      } else {
        throw new Error('Failed to fetch boat data');
      }
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error fetching boat data:', error);
    throw error;
  }
};



