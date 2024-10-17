import employees from '../../data.json';

const initialState = {
  employees,
  selectedEmployee: null
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(emp => emp.id === action.payload.id ? action.payload : emp),
        selectedEmployee: action.payload 
      };
    case 'DELETE_EMPLOYEE':
      const deletedEmployee = state.employees.find(emp => emp.id === action.payload); 
      const updatedEmployees = state.employees.filter(emp => emp.id !== action.payload);
      const newSelectedEmployee = updatedEmployees.length > 0 ? deletedEmployee : null;  

      return {
        ...state,
        employees: updatedEmployees,
        selectedEmployee: newSelectedEmployee  
      };
    default:
      return state;
  }
};
