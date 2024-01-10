import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { baseURL } from "../../utils/baseRoute";
const StudentDialog = ({ studentDetail, setStudentDetail }) => {
  const [formData, setFormData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    grade: "",
    gender: "other",
  });
  console.log("studentDetail", studentDetail);
  useEffect(() => {
    if (studentDetail.firstName) {
      setFormData(studentDetail);
    }
  }, []);

  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleGenderChange = (e) => {
    const { id } = e.target;
    setFormData({ ...formData, gender: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    axios({
      method: "post",
      url: baseURL + `${formData._id ? "auth/updateStudent" : "auth/sign-up"}`,
      data: formData,
    })
      .then(({ data }) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      class="modal fade"
      id="studentBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Student Detail
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setStudentDetail({});
              }}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="modal-body">
              <div className="mt-2">
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
              <div className="mt-2">
                <label className="form-label" for="form3Example1m">
                  Last name
                </label>
                <div className="form-outline">
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

              <div className="mt-2">
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

              <div className="mt-2">
                <label className="form-label" for="form3Example1m">
                  Email
                </label>
                <div className="form-outline">
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
              <div className="mt-2">
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
              <div className="mt-2">
                <label className="form-label" for="form3Example1m">
                  Password
                </label>
                <div className="form-outline">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setStudentDetail({});
                }}
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDialog;
