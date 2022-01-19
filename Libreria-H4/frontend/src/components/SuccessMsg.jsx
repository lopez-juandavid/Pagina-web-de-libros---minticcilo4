import React from "react";
import PropTypes from "prop-types";

const SuccessMsg = ({ configuracion = ["", "bg-danger"] }) => {
  return <div className={`${configuracion[1]} text-center text-white p-2 mensaje user-select-none`}>
    { configuracion[0] }
  </div>;
};

SuccessMsg.propTypes = {
  configuracion: PropTypes.array,
};

export default SuccessMsg;
