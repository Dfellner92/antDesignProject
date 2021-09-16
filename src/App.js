import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Table, Modal } from "antd";

function App() {
  const [data, setData] = useState([]);
  const [isoData, setIsoData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  async function apiCallForID(id) {
    let url = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      setIsoData(json.data);
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
    const url = "http://dummy.restapiexample.com/api/v1/employees";

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

  console.log(isoData.employee_name);

  return (
    <div className="App">
      <Table columns={columns} dataSource={data}></Table>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        content={isoData}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{isoData.employee_name}</p>
        <p>{isoData.employee_age}</p>
      </Modal>
      ,{" "}
    </div>
  );
}

export default App;
