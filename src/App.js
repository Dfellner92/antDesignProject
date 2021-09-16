import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Table, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addEmployeeData } from "./redux/actions";

function App() {
  const [data, setData] = useState([]);
  const [isoData, setIsoData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const showModal = (id) => {
    console.log(id);
    localStorage.setItem("open modal id", id);
    apiCallForID(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const callDispatch = (id) => {
    dispatch(addEmployeeData(id));

  }

  async function apiCallForID(id) {
    let url = `https://dummy.restapiexample.com/api/v1/employee/${id}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setIsoData(json.data);
      callDispatch(id);
    } catch (error) {
      console.log("error", error);
    }
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Employee Name",
      key: "employee_name",
      dataIndex: "employee_name",
    },
    {
      title: "Button Test",
      key: "id",
      dataIndex: "id",
      render: (id) => (
        <button id={id} type="primary" onClick={() => showModal(id)}>
          Open Modal
        </button>
      ),
    },
  ];

  useEffect(() => {
    const url = "https://dummy.restapiexample.com/api/v1/employees";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  console.log(isoData);

  return (
    <div className="App">
      <Table columns={columns} dataSource={data}></Table>
      <Modal
        title={isoData.employee_name}
        visible={isModalVisible}
        content={isoData}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{"Employee Age: " + isoData.employee_age}</p>
        <p>{"Employee Salary: $" + isoData.employee_salary}</p>
      </Modal>
      ,{" "}
    </div>
  );
}

export default App;
