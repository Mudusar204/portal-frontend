import React from "react";
import Modal from "react-modal";
import FeeVoucher from "../../HRPortal/manageFees/FeeVoucher";
import FeeVoucherForm from "../../HRPortal/manageFees/PayFees";

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

function CustomModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle..color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        style={props.name!=="Pay"?{
          background: "#DB5954",
          color: "white",
        padding:5,
        paddingLeft:15,
        paddingRight:15,
          border: "1px",
          borderRadius: 5,
          borderColor: "white",
        }:{
          background: "#DB5954",
          color: "white",
        padding:5,
        paddingLeft:15,
        paddingRight:15,
          border: "1px",
          borderRadius: 5,
          borderColor: "white",
        }}
        onClick={openModal}
      >
        {props.name}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.name==="Generate"?
        <FeeVoucher/>:
        <div>
        <FeeVoucherForm data={props} fun={closeModal}/>  
          </div>}
      </Modal>
    </div>
  );
}

export default CustomModal;
