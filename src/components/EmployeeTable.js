import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../redux/actions/employeeActions';
import { useNavigate } from 'react-router-dom';
import { showToast } from './ToastNotification';
import '../styles/EmployeeStyles.css';

const EmployeeTable = () => {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (employee) => { 
    navigate(`/edit/${employee.id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id)); 
    showToast('Employee deleted successfully');
  };

  return (
    <div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <img 
                  src={employee.image} 
                  alt={employee.fullName} 
                  className="employee-image"
                />
              </td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => handleEdit(employee)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(employee.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
