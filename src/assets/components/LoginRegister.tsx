import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../components/LoginRegister.css";

const LoginRegister: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string | null>(null); // State to store selected user type

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    if (userType === 'Patient') {
      navigate('/Patient');
    } else if (userType === 'Doctor') {
      navigate('/Register');
    } else {
      alert("Please select a user type before registering.");
    }
  };

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
  };

  return (
    <div className="card4-container">
      <div className="card4">
        <h2>Continue as:</h2>
        <div className="radio-options">
          <label>
            <input 
              type="radio" 
              name="userType" 
              value="Doctor" 
              onChange={handleUserTypeChange} 
            /> Doctor
          </label>
          <br />
          <label>
            <input 
              type="radio" 
              name="userType" 
              value="Patient" 
              onChange={handleUserTypeChange} 
            /> Patient
          </label>
        </div>
        <div className="btn-group">
          <button className="custom-btn" onClick={handleLogin}>
            Login
          </button>
          <button className="custom-btn" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
