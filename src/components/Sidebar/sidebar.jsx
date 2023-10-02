import React, { useState } from "react";
import "./sidebars.css";
import { useHistory } from "react-router-dom";

const SideBar = ({ activeItem, setActiveItem }) => {
  // const [activeItem, setActiveItem] = useState("home"); // Initialize "home" as the active item
  const history = useHistory();
  // Function to handle the click event for navigation items
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div
        className="d-flex flex-column  p-3 text-white bg-dark sidebar"
        style={{ width: "280px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex justify-content-center align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4 ">Fee Automation</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              // href="/admin/students"
              className={`nav-link text-white ${
                activeItem === "student" ? "active" : ""
              }`}
              onClick={() => {
                history.push("/admin/students");
                handleItemClick("student");
              }}
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home" />
              </svg>
              Students
            </a>
          </li>
          <li>
            <a
              className={`nav-link text-white ${
                activeItem === "report" ? "active" : ""
              }`}
              onClick={() => {
                history.push("/admin/feeReport");
                handleItemClick("report");
              }}
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              Fee Report
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className={`nav-link text-white ${
                activeItem === "orders" ? "active" : ""
              }`}
              onClick={() => handleItemClick("orders")}
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link text-white ${
                activeItem === "products" ? "active" : ""
              }`}
              onClick={() => handleItemClick("products")}
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link text-white ${
                activeItem === "customers" ? "active" : ""
              }`}
              onClick={() => handleItemClick("customers")}
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li> */}
        </ul>
        <hr />
        <div className="dropdown">
          <a
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>User Name</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            {/* <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li> */}
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
