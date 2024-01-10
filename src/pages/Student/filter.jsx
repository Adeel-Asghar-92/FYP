import React, { useState } from "react";
const FilterDialog = ({ handleApplyFilter }) => {
  const [filterValues, setFilterValues] = useState({
    grade: "",
    status: "",
    month: "",
  });

  const handleGradeChange = (e) => {
    setFilterValues({ ...filterValues, grade: e.target.value });
  };

  const handleStatusChange = (e) => {
    setFilterValues({ ...filterValues, status: e.target.value });
  };

  const handleMonthChange = (e) => {
    setFilterValues({ ...filterValues, month: e.target.value });
  };

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
                Select Grade
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={filterValues.grade}
                onChange={handleGradeChange}
              >
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="form-label" for="form3Example1n">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={filterValues.status}
                onChange={handleStatusChange}
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
                value={filterValues.month}
                onChange={handleMonthChange}
              >
                <option value="">All</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
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
              onClick={() => handleApplyFilter(filterValues)}
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
