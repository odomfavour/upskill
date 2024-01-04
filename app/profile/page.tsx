'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
const ProfilePage = () => {
  const [user, setUser] = useState();
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setUser(res.data.data._id);
  };

  return (
    <div>
      <h3 className='mt-20'>Profile</h3>
      <button
        onClick={getUserDetails}
        className='bg-green-800 mt-4 text-white font-bold py-2 px-4 rounded'
      >
        GetUser Details
      </button>
    </div>
  );
};

export default ProfilePage;
