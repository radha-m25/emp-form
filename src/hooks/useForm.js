import { useState } from "react";

const useForm = () => {
    // State for form data
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

    // State for form field errors
    const [errors, setErrors] = useState({
        phoneNum: "",
        email: "",
        address: "",
    });

    // Regular expressions for validation
    const phoneRgex = /^[0-9]{10}$/; // Regex to validate 10-digit phone number
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regex to validate email format

    // Function to handle input changes and validations
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update form data state
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Initialize variables to store validation error messages
        let phoneNumError = errors.phoneNum;
        let emailError = errors.email;
        let addressError = errors.address;

        // Perform validation based on the input field
        if (name === "phoneNum") {
            phoneNumError = !phoneRgex.test(value) ? "Phone numbers must be 10 digits" : "";
        }
        if (name === "email") {
            emailError = !emailRegex.test(value) ? "Invalid email format" : "";
        }
        if (name === "address") {
            addressError = value.length > 100 ? "Address cannot contain more than 100 characters" : "";
        }

        // Update errors state
        setErrors({
            phoneNum: phoneNumError,
            email: emailError,
            address: addressError,
        });
    };

    // Function to validate form data before submission
    const validate = () => {
        // Check if there are no errors
        const hasErrors = Object.values(errors).every((error) => error === "");
        
        // Define optional fields
        const optionalFields = ["hobbies", "middleName"];
        // Validate mandatory fields
        const mandatoryFields = Object.keys(formData)
            .filter((item) => !optionalFields.includes(item))
            .every((item) => Boolean(formData[item]));
        
        // If mandatory fields are filled and there are no errors
        if (mandatoryFields && hasErrors) {
            alert("Data is saved");
            console.log(formData);
        } else {
            alert("Please fill all the required fields with valid data");
        }
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        validate(); // Validate form data
    };

    return {
        formData, // The current form data
        errors, // The current form field errors
        handleInputChange, // Function to handle input changes and validations
        handleSubmit // Function to handle form submission
    }
}

export default useForm;