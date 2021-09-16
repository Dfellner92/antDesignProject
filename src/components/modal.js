import React, { useState } from "react";
import { Table, Tag, Space, Modal, Button } from "antd";
const { Column, ColumnGroup } = Table;

function DataModal(dataToPassIn) {
  const [modalData, setModalData] = useState([]);
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

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p></p>
      <p>{modalData}</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default DataModal;
