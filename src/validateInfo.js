export default function validateInfo(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password do not match";
  }
  if (!values.userName.trim()) {
    errors.userName = "User name required";
  } else if (!/^[A-Za-z]+/.test(values.userName.trim())) {
    errors.userName = "Enter a valid name";
  }
  if (!values.phone) {
    errors.phone = "Phone number required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number should be 10 digits";
  }
  return errors;
}
