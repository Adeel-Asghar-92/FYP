import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import axios from "axios";
import { baseURL } from "../../utils/baseRoute";
import { useHistory } from "react-router-dom";
function StudentLoginScreen() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: baseURL + "auth/sign-in",
      data: formData,
    })
      .then(({ data }) => {
        const token = data.data.accessToken;
        localStorage.setItem("email", formData.email);
        localStorage.setItem("accessToken", token);
        history.push("/student/account-book");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid m-0 p-0 overflow-hidden">
      <div className="row d-flex align-items-center">
        <div className="col">
          <div className="image-container">
            <img
              // src={Background}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
              alt="Sample photo"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="p-md-3 text-black">
            <h4 className="mb-5 text-uppercase">Login</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>

              <div className="d-grid mt-5">
                <button type="submit" className="btn btn-primary btn-sm">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLoginScreen;
