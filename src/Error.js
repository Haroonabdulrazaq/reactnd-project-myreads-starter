import React from 'react';

const Error = (props) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
      {props.text}
    </div>
  )
}

export default Error;
