export const addEmployeeData = (id) => async (dispatch) => {
  dispatch({ type: "ADD_EMPLOYEEDATA_REQUEST" });

  try {
    const response = await fetch(
      `https://dummy.restapiexample.com/api/v1/employee/${id}`
    )
      .then((response) => response.json())
      .then((jsonData) => console.log(jsonData));
      await dispatch({ type: "ADD_EMPLOYEEDATA_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "ADD_EMPLOYEEDATA_FAILED", payload: error });
  }
};
