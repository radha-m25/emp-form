import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EmployeeForm from "../components/employeeForm/EmployeeForm";
import Home from "../components/home/Home";

// Create the router configuration using createBrowserRouter
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/form",
        element: <EmployeeForm/>
    }
]);

export default AppRouter;