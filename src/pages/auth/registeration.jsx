import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import Background from "../../images/background.jpg";
import { useHistory } from "react-router-dom";

function RegistrationForm() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
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
    // Add your registration logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className=".container-fluid m-0 overflow-hidden">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="row">
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
              <h4 className="mb-5 text-uppercase">Student registration form</h4>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="form3Example1m">
                    First name
                  </label>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1m"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="form3Example1n">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="form3Example1n"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="form3Example1n">
                    Gender:
                  </label>
                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="option1"
                      />
                      <label className="form-check-label" for="femaleGender">
                        Female
                      </label>
                    </div>

                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="option2"
                      />
                      <label className="form-check-label" for="maleGender">
                        Male
                      </label>
                    </div>

                    <div className="form-check form-check-inline mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        value="option3"
                      />
                      <label className="form-check-label" for="otherGender">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="form3Example1n">
                    Select class
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example8">
                      Email
                    </label>
                    <input
                      type="text"
                      id="form3Example8"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example8">
                      Address
                    </label>
                    <input
                      type="text"
                      id="form3Example8"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="form3Example1m1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example1m1"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="form3Example1n1">
                      Conform password
                    </label>
                    <input
                      type="password"
                      id="form3Example1n1"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="d-grid mt-5">
                <button
                  type="button"
                  className="btn btn-primary btn-sm "
                  onClick={() => history.push("/login")}
                >
                  Submit form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
