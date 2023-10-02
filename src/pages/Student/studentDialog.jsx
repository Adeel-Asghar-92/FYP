import React from "react";
const StudentDialog = ({ feeByMonth }) => {
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
            ></button>
          </div>
          <div class="modal-body">
            <div className="mt-2">
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
            <div className="mt-2">
              <label className="form-label" for="form3Example1m">
                Last name
              </label>
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1m"
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
            <div className="mt-2">
              <label className="form-label" for="form3Example1m">
                Email
              </label>
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1m"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="mt-2">
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
            <div className="mt-2">
              <label className="form-label" for="form3Example1m">
                Scolarship/Discount
              </label>
              <div className="form-outline">
                <input
                  type="number"
                  id="form3Example1m"
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
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDialog;
