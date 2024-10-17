export const setSelectedEmployee = (employee) => ({
  type: 'SET_SELECTED_EMPLOYEE',
  payload: employee
});

export const updateEmployee = (employee) => ({
  type: 'UPDATE_EMPLOYEE',
  payload: employee
});

export const deleteEmployee = (id) => ({
  type: 'DELETE_EMPLOYEE',
  payload: id
});
