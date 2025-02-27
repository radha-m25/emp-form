import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom for navigation
import './App.css'; // Import CSS file for styling

function App() {
  const navigate = useNavigate(); // Initialize useNavigate which returns a function to navigate programmatically

  // Handle the button click to navigate to the EmployeeForm
  const handleForm = () => {
    navigate("/form"); // Navigate to the /form path
  }

  return (
    <div className='main-container'>
      <h3>
        Please click the button below to fill out the Employee Form.
      </h3>
      <button className='btn' onClick={handleForm}>EMPLOYEE FORM</button> {/* Button to navigate to the EmployeeForm */}
    </div>
  );
}

export default App; // Export the App component as the default export