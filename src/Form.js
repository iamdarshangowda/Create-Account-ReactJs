import React, { useState } from "react";
import "./Form.css";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  function submitForm() {
    setIsSubmit(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmit ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
