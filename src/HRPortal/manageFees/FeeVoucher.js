import React from 'react';

const FeeVoucher = (props) => {

  const print=()=>{
window.print()
  }
  const voucherStyle = {
    color: '#DA5854',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign:'center'
  };

  const dashStyle = {
  
  };

  const bottomContainerStyle = {
   
  };

  const bottomTextStyle = {
    fontSize: '18px',
    margin: '10px 0',
    display:"flex",
    justifyContent:'space-between'
  };

  return (
    <div style={voucherStyle}>
      <div style={titleStyle}>Fee Voucher</div>
      <div style={{textAlign:'end'}}>
        <span style={dashStyle}>Date:</span>
        <span style={dashStyle}>----------------------</span>

      </div>
      <div style={bottomContainerStyle}>
        <div style={bottomTextStyle}>
          <span style={dashStyle}>Student Code:</span>
          <span style={dashStyle}>-----------------------------</span>
        </div>
        <div style={bottomTextStyle}>
          <span style={dashStyle}>Student Name:</span>
          <span style={dashStyle}>-----------------------------</span>

        </div>
        <div style={bottomTextStyle}>
          <span style={dashStyle}>Student CNIC:</span>
          <span style={dashStyle}>-----------------------------</span>

        </div>
        <div style={bottomTextStyle}>
          <span style={dashStyle}>Month:</span>
          <span style={dashStyle}>-----------------------------</span>

        </div>
        <div style={bottomTextStyle}>
          <span style={dashStyle}>Fee:</span>
          <span style={dashStyle}>-----------------------------</span>

        </div>
        <div style={bottomTextStyle}>
          <span style={dashStyle}>Signature:</span>
          <span style={dashStyle}>-----------------------------</span>

        </div>
      <div><button onClick={print} style={{color:"white",background:"#E15E58",borderColor:"white",borderRadius:10,padding:5,paddingLeft:15,paddingRight:15}}>Print</button></div>
      </div>
    </div>
  );
};

export default FeeVoucher;


