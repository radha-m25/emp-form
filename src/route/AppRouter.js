import { createBrowserRouter } from "react-router-dom"; // Import createBrowserRouter from react-router-dom
import App from "../App"; // Import the main App component
import EmployeeForm from "../components/employeeForm/EmployeeForm"; // Import the EmployeeForm component
import Home from "../components/home/Home";

// Create the router configuration using createBrowserRouter
const AppRouter = createBrowserRouter([
    {
        path: "/", // Root path
        element: <App/> // Render the App component at the root path
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/form", // Path for the employee form
        element: <EmployeeForm/> // Render the EmployeeForm component at /form path
    }
]);

export default AppRouter; // Export the router configuration as the default export