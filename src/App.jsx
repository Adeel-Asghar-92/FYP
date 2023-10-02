import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationForm from "./pages/auth/registeration";
import LoginScreen from "./pages/auth/login";
import AccountBook from "./pages/AccountBook";
import SideBar from "./components/Sidebar/sidebar";
import AdminLoginScreen from "./pages/auth/login";
import Student from "./pages/Student/student";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FeeReport from "./pages/Reports/feeReport";

function App() {
  const [activeItem, setActiveItem] = useState("student"); // Initialize "home" as the active item
  return (
    <>
      <Router>
        <Route exact path="/" component={RegistrationForm} />
        <Route exact path="/student/login" component={LoginScreen} />
        <Route exact path="/student/account-book" component={AccountBook} />
        <Route exact path="/admin/login" component={AdminLoginScreen} />
        <Route
          exact
          path="/admin/students"
          component={() => (
            <Student activeItem={activeItem} setActiveItem={setActiveItem} />
          )}
        />
        <Route
          exact
          path="/admin/feeReport"
          component={() => (
            <FeeReport activeItem={activeItem} setActiveItem={setActiveItem} />
          )}
        />
      </Router>
    </>
  );
}

export default App;
