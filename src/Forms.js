import React, { useEffect, useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    terms: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
      console.log("submitted");
    }
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Re-enter your password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password don't match";
    }
    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (values.phone.length !== 10) {
      errors.phone = "Phone number should be 10 digits";
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on" className="form">
      <label className="form__label" htmlFor="email">
        Your email address
      </label>
      <input
        className="form__input"
        type="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <p className="form__errors">{formErrors.email}</p>
      <br />
      <label className="form__label" htmlFor="password">
        Your password
      </label>
      <input
        className="form__input"
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <p className="form__errors">{formErrors.password}</p>
      <br />
      <label className="form__label" htmlFor="confirmPassword">
        Confirm your password
      </label>
      <input
        className="form__input"
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
      />
      <p className="form__errors">{formErrors.confirmPassword}</p>
      <br />
      <label className="form__label" htmlFor="fullName">
        Your full name
      </label>
      <input
        className="form__input"
        type="text"
        name="fullName"
        onChange={handleChange}
        value={formData.fullName}
      />
      <p className="form__errors">{formErrors.fullName}</p>
      <br />
      <label className="form__label" htmlFor="phone">
        Your phone number
      </label>
      <input
        type="text"
        className="form__input"
        name="phone"
        onChange={handleChange}
        value={formData.phone}
      />
      <p className="form__errors">{formErrors.phone}</p>
      <br />
      <li>
        <input
          type="checkbox"
          className="form__checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          required
        />
        <label className="form__label" htmlFor="terms">
          I read and agree Terms and Conditions
        </label>
      </li>
      <br />
      <button className="form__submit">Create Account</button>
    </form>
  );
}
