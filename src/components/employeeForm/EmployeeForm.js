import React from "react";
import useForm from "../../hooks/useForm";

const EmployeeForm = () => {

  // Destructure form-related functions and data from useForm hook
  const { formData, errors, handleInputChange, handleSubmit } = useForm();

  return (
    <div className="form-container">
      <div className="card">
        <h4 style={{ color: "#00008b" }}>EMPLOYEE FORM</h4>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="grid-container">
            {/* First Name Field */}
            <div className="grid-item firstName">
              <label>FIRST NAME*</label>
              <input
                data-style="common"
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Middle Name Field */}
            <div className="grid-item middleName">
              <label>MIDDLE NAME</label>
              <input
                data-style="common"
                type="text"
                name="middleName"
                value={formData.middleName}
                placeholder="Middle Name"
                onChange={handleInputChange}
              />
            </div>
            
            {/* Last Name Field */}
            <div className="grid-item lastName">
              <label>LAST NAME*</label>
              <input
                data-style="common"
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Date of Birth Field */}
            <div className="grid-item dob">
              <label>DOB*</label>
              <input
                data-style="common"
                type="date"
                name="dob"
                value={formData.dob}
                placeholder="Date of Birth"
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Phone Number Field */}
            <div className="grid-item phoneNum">
              <label>PHONE NUMBER*</label>
              <input
                data-style="common"
                type="number"
                name="phoneNum"
                value={formData.phoneNum}
                placeholder="Phone Number"
                onChange={handleInputChange}
                required
              />
              {errors.phoneNum && <span className="error">** {errors.phoneNum} **</span>}
            </div>
            
            {/* Email Field */}
            <div className="grid-item email">
              <label>EMAIL*</label>
              <input
                data-style="common"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error">** {errors.email} **</span>}
            </div>

            {/* Hobbies Field */}
            <div className="grid-item hobbies">
              <label>HOBBIES</label>
              <input
                data-style="common"
                type="text"
                name="hobbies"
                value={formData.hobbies}
                placeholder="Hobbies"
                onChange={handleInputChange}
              />
            </div>
            
            {/* Address Field */}
            <div className="grid-item address">
              <label>ADDRESS*</label>
              <textarea
                data-style="common"
                name="address"
                value={formData.address}
                placeholder="less than 100 characters"
                onChange={handleInputChange}
                required
              />
              {errors.address && <span className="error">** {errors.address} **</span>}
            </div>
          </div>
          
          {/* Submit Button */}
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;