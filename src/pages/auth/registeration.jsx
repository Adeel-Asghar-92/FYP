import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import Background from "../../images/background.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utils/baseRoute";

function RegistrationForm() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    grade: "",
    gender: "other",
  });

  const history = useHistory();
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleGenderChange = (e) => {
    const { id } = e.target;
    setFormData({ ...formData, gender: id });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    axios({
      method: "post",
      url: baseURL + "auth/sign-up",
      data: formData,
    })
      .then(({ data }) => {
        const token = data.data.accessToken;
        localStorage.setItem("accessToken", token);
        history.push("/student/account-book");
      })
      .catch((error) => {
        console.log(error);
      });
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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label" for="form3Example1m">
                      First name
                    </label>
                    <div className="form-outline">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        id="form3Example1m"
                        required
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
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        id="form3Example1n"
                        required
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
                          id="female"
                          value=""
                          checked={formData.gender === "female"}
                          onChange={handleGenderChange}
                        />
                        <label className="form-check-label" for="female">
                          Female
                        </label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="male"
                          value=""
                          checked={formData.gender === "male"}
                          onChange={handleGenderChange}
                        />
                        <label className="form-check-label" for="male">
                          Male
                        </label>
                      </div>

                      <div className="form-check form-check-inline mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="other"
                          value=""
                          checked={formData.gender === "other"}
                          onChange={handleGenderChange}
                        />
                        <label className="form-check-label" for="other">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label" for="form3Example1n">
                      Select Grade
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="grade"
                      onChange={handleChange}
                      value={formData.grade}
                    >
                      <option disabled value="">
                        Select Grade
                      </option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
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
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="form3Example1n"
                        required
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6 mb-4">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example8">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.ad}
                      onChange={handleChange}
                      id="form3Example1n"
                      required
                      className="form-control form-control-sm"
                    />
                  </div>
                </div> */}
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1m1">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="form3Example1n"
                        required
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1n1">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        id="form3Example1n"
                        required
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-grid mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm "
                    // onClick={() => history.push("/login")}
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
