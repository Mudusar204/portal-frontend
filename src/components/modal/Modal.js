import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function CustomModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        style={{
          background: "#DB5954",
          color: "white",
          padding: 5,
          border: "1px",
          borderRadius: 5,
          borderColor: "white",
        }}
        onClick={openModal}
      >
        Generate
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Print Fee Voucher</h2>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ fontWeight: "bolder" }}>Name</p>
            <p>malik</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <p style={{ fontWeight: "bolder" }}>Student ID</p>
            <p>00011</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ fontWeight: "bolder" }}>Fee</p>
            <p>1200</p>
          </div>
        </div>
        <button
          style={{
            background: "#DB5954",
            color: "white",
            padding: 5,
            border: "1px",
            borderRadius: 5,
            borderColor: "white",
            paddingLeft: 20,
            paddingRight: 20,
            marginLeft: 90,
            marginTop: 2,
          }}
          onClick={closeModal}
        >
          Print
        </button>
      </Modal>
    </div>
  );
}

export default CustomModal;
