import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>Create an Account</h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Your email address
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm your password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="userName" className="form-label">
            Your full name
          </label>
          <input
            type="text"
            name="userName"
            className="form-input"
            value={values.userName}
            onChange={handleChange}
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Your phone number
          </label>
          <input
            type="number"
            name="phone"
            className="form-input"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <button className="form-input-btn">Create Account</button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
