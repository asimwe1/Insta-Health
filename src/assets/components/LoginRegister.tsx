import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../components/LoginRegister.css";

const LoginRegister: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'Doctor' | 'Patient'>('Doctor');

  const handleContinueAs = (role: 'Doctor' | 'Patient') => {
    setSelectedRole(role);
  };

  return (
    <Container className="my-5 login-register-container">
      <Row>
        <Col md={6} className="mx-auto">
          <h3 className="mb-4">Continue as:</h3>
          <div className="d-flex mb-4">
            <label className={`continue-btn me-2 ${selectedRole === 'Doctor' ? 'active' : ''}`}>
              <input
                type="radio"
                checked={selectedRole === 'Doctor'}
                onChange={() => handleContinueAs('Doctor')}
              />
              Doctor
            </label>
            <label className={`continue-btn ${selectedRole === 'Patient' ? 'active' : ''}`}>
              <input
                type="radio"
                checked={selectedRole === 'Patient'}
                onChange={() => handleContinueAs('Patient')}
              />
              Patient
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <Button variant="primary" className="login-btn">
              Login
            </Button>
            <Button variant="primary" className="register-btn">
              Register
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;