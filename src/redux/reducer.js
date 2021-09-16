import { combineReducers } from "redux";

const employeesReducer = (state = [], action) => {
    switch (action.type) {
    case "ADD_EMPLOYEEDATA_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_EMPLOYEEDATA_SUCCESS":
      return {
        loading: false,
        employee: action.payload,
      };
    case "ADD_EMPLOYEEDATA_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    employeesReducer: employeesReducer
});

export default rootReducer;
