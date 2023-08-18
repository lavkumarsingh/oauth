import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from "../firebase";

function Dashboard() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userDetails'));
    if(!data) {
      navigate('/');
    }
    setUserData(data);
  }, []);

  const signOut = () => {
    setUserData({});
    logout();
    navigate("/");
  }

  return (
    <div style={{display: 'flex'}}>
      <nav style={{height: '100%'}}>
        <img style={{borderRadius: 99, height: 40}} src={userData.avatar} alt="avatar" />
        <p style={{margin: 0}}>{userData.name}</p>
        <p style={{margin: 0}}>{userData.email}</p>
        <button onClick={signOut}>Sign out</button>
      </nav>
    </div>
  )
}

export default Dashboard