import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import EmployeeTable from './components/EmployeeTable';
import EmployeeEditForm from './components/EmployeeEditForm';
import Header from './components/Header'; 
import ToastNotification from './components/ToastNotification';  

function App() {
  const [headerTitle, setHeaderTitle] = useState('Employee Management');
 
  const updateHeaderTitle = (title) => {
    setHeaderTitle(title);
  };

  return (
    <Provider store={store}>
      <Router>
        <Header title={headerTitle} showBackButton={true} />
        <ToastNotification />
        <Routes>
          <Route exact path="/" element={<EmployeeTable updateHeaderTitle={updateHeaderTitle} />} />
          <Route path="/edit/:id" element={<EmployeeEditForm />} />
        </Routes> 
      </Router>
    </Provider>
  );
}

export default App;
