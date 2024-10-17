import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/header.css'; 

const Header = () => {
  const employee = useSelector(state => state.selectedEmployee);
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleBack = () => {
    navigate('/');
  };
 
  const isEditScreen = location.pathname.startsWith('/edit');

  return (
    <div className="header">
      {isEditScreen && (
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
      )}
      {employee ? (
        <div className="header-content">
          <img src={employee.image} alt="employee" className="header-image" />
          <h2 className="header-title">{employee.fullName}</h2>
        </div>
      ) : (
        <h2 className="header-title">Employee Management</h2>
      )}
    </div>
  );
};

export default Header;
