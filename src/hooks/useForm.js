import { useState, useEffect } from "react";

// customHooks to manage state and functions
const useForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    phoneNum: "",
    email: "",
    hobbies: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    phoneNum: "",
    email: "",
    dob: "",
    address: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    let phoneNumError = errors.phoneNum;
    let emailError = errors.email;
    let dobError = errors.dob;
    let addressError = errors.address;

    if (name === "phoneNum") {
      phoneNumError = !phoneRegex.test(value)
        ? "Phone number must be 10 digits"
        : "";
    }
    if (name === "email") {
      emailError = !emailRegex.test(value) ? "Invalid email format" : "";
    }
    if (name === "dob") {
      const today = new Date();
      const selectedDate = new Date(value);
      dobError =
        selectedDate > today ? "Date of Birth cannot be in the future" : "";
    }
    if (name === "address") {
      addressError =
        value.length > 100
          ? "Address cannot contain more than 100 characters"
          : "";
    }

    setErrors({
      phoneNum: phoneNumError,
      email: emailError,
      dob: dobError,
      address: addressError,
    });
  };

  const validate = () => {
    const hasErrors = Object.values(errors).every((error) => error === "");

    const optionalFields = ["hobbies", "middleName"];

    const mandatoryFields = Object.keys(formData)
      .filter((item) => !optionalFields.includes(item))
      .every((item) => Boolean(formData[item]));

    return mandatoryFields && hasErrors;
  };

  useEffect(() => {
    setIsFormValid(validate());
  }, [formData, errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      alert("Data is saved");
      console.log(formData);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        phoneNum: "",
        email: "",
        hobbies: "",
        address: "",
      });
    } else {
      alert("Please fill all the required fields with valid data");
    }
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    isFormValid,
  };
};

export default useForm;
