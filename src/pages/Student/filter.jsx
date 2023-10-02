import React from "react";
const FilterDialog = ({ feeByMonth }) => {
  return (
    <div
      class="modal fade"
      id="filterBackdrop"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Apply Filter to Show Report
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
              <label className="form-label" for="form3Example1n">
                Select class
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">All</option>
                <option value="2">One</option>
                <option value="3">Two</option>
                <option value="4">Three</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="form-label" for="form3Example1n">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">Paid</option>
                <option value="2">UnPaid</option>
                <option value="3">Both</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="form-label" for="form3Example1n">
                Select Month
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="all">All</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
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
              Apply filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDialog;
