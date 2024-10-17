import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ToastStyles.css';  

const ToastNotification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ backgroundColor: 'white', color: 'black' }}  
    />
  );
};

export const showToast = (message) => {
  toast.success(message, {
    progressClassName: 'custom-progress',
  });
};

export default ToastNotification;
