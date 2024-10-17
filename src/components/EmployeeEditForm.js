import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../redux/actions/employeeActions';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import '../styles/EmployeeForm.css';
import { showToast } from './ToastNotification';

const EmployeeEditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector(state => state.employees.find(emp => emp.id === parseInt(id)));
  const [formData, setFormData] = useState(employee || {});
  const [imagePreview, setImagePreview] = useState(employee ? employee.image : '');

  useEffect(() => {
    if (!employee) {
      navigate('/');
    }
  }, [employee, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(formData));
    showToast('Employee details updated');
    navigate('/');
  };

  return (
    <div className='container-form'>
      <Header showBackButton={true} />
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="image-preview-wrapper">
          {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        </div>
        <label>Image</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        
        <label>Full Name</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />

        <label>Phone</label>
        <input 
          type="tel" 
          maxLength="10"
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
        />

        <label>Salary</label>
        <input 
          type="number" 
          min="0"
          name="salary" 
          value={formData.salary} 
          onChange={handleChange} 
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EmployeeEditForm;
