import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Table, Tag, Space, Modal, Button } from "antd";

const { Column, ColumnGroup } = Table;

function App() {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  

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
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <button type="primary" onClick={showModal}>
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
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  console.log(Array.isArray(data));
  let mapped = data.map((elem) => elem.id);
  console.log(mapped);

  return (
    <div className="App">
      <Table columns={columns} dataSource={data}></Table>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        dataSource={data}
      >
        <p></p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      ,{" "}
    </div>
  );
}

export default App;
