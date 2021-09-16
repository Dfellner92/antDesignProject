export const addEmployeeData = (id) => async (dispatch) => {
  dispatch({ type: "ADD_EMPLOYEEDATA_REQUEST" });

  try {
    const response = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`);
    console.log(response);
    await dispatch({ type: "ADD_EMPLOYEEDATA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_EMPLOYEEDATA_FAILED", payload: error });
  }
};
