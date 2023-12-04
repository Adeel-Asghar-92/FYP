import React, { useState, useEffect } from "react";
import SideBar from "../../components/Sidebar/sidebar";
import View from "../../images/view.png";
import Edit from "../../images/edit.png";
import FeeIcon from "../../images/fee.png";
import NavBar from "../../components/NavBar/navbar";
import FeeDialog from "./feeDialog.jsx";
import StudentDialog from "./studentDialog.jsx";
import FilterDialog from "./filter";
import axios from "axios";
import { baseURL } from "../../utils/baseRoute.js";

// const [activeItem, setActiveItem] = useState("home"); // Initialize "home" as the active item
const Users = ({ activeItem, setActiveItem }) => {
  const [student, setStudent] = useState([
    {
      studentId: "13912999",
      name: "Adeel Asghar",
      class: "2",
      isActive: true,
      balance: "0",
    },
    {
      studentId: "13912000",
      name: "Ahssan Sadique",
      class: "2",
      isActive: true,
      balance: "-2000",
    },
  ]);
  const [feeByMonth, setFeeByMonth] = useState([
    { month: "January", fee: 0 },
    { month: "February", fee: 0 },
    { month: "March", fee: 0 },
    { month: "April", fee: 0 },
    { month: "May", fee: 0 },
    { month: "June", fee: 0 },
    { month: "July", fee: 0 },
    { month: "August", fee: 0 },
    { month: "September", fee: 0 },
    { month: "October", fee: 0 },
    { month: "November", fee: 0 },
    { month: "December", fee: 0 },
  ]);

  useEffect(() => {
    axios({
      method: "post",
      url: baseURL + "student/generateReport",
      data: {
        grade: "",
        status: "",
        month: "",
      },
    })
      .then(({ data }) => {
        console.log(data.data.students);
        setStudent(data.data.students);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 p-0">
            <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
          </div>
          <div className="col-12 col-md-9 mt-3">
            {/* <div className="col-12 col-md-12 mt-3"> */}
            <div className="d:flex justify-content-between">
              <div className="row">
                <div className="col">
                  <h2>Students</h2>
                </div>
                <div className="col text-end">
                  {/* <button
                    className="btn btn-primary"
                    data-bs-target="#studentBackdrop"
                    data-bs-toggle="modal"
                  >
                    Add Students
                  </button> */}
                </div>
              </div>
              <div className="row mb-3 mt-5">
                <div className="col">
                  {/* <input
                    type="search"
                    name="search"
                    id=""
                    className="form-control form-control-md"
                    placeholder="Search by ID, Name, Email... "
                  /> */}
                </div>
                <div className="col text-end ">
                  {/* <button
                    className="btn btn-primary m-2"
                    data-bs-target="#filterBackdrop"
                    data-bs-toggle="modal"
                  >
                    Apply Filter
                  </button> */}
                  <button
                    className="btn btn-primary"
                    data-bs-target="#studentBackdrop"
                    data-bs-toggle="modal"
                  >
                    Add Students
                  </button>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-secondary border-white">
                  <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    {/* <th scope="col">Is Active</th> */}
                    <th scope="col">Balance</th>
                    <th className="text-center" scope="col">
                      Action
                    </th>
                    {/* View detail, Edit fee */}
                  </tr>
                </thead>
                <tbody>
                  {student.map((x) => (
                    <tr className="align-middle">
                      <th scope="row">{x.studentId}</th>
                      <td>{x.firstName + x.lastName}</td>
                      <td>{x.grade}</td>
                      {/* <td>{x.isActive ? "True" : "False"}</td> */}
                      <td>
                        {Number(x.totalPaidAmount) -
                          Number(x.totalPayableAmount)}
                      </td>
                      <td className="text-center">
                        {/* <img
                          title="View Detail"
                          src={View}
                          width={30}
                          height={30}
                        /> */}
                        <img
                          title="Edit"
                          src={Edit}
                          width={24}
                          height={24}
                          data-bs-target="#studentBackdrop"
                          data-bs-toggle="modal"
                        />
                        <img
                          title="Fee"
                          src={FeeIcon}
                          width={24}
                          height={24}
                          data-bs-target="#feeBackdrop"
                          data-bs-toggle="modal"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div class="modal-dialog modal-dialog-scrollable" id="staticBackdrop"> */}
        <FeeDialog feeByMonth={feeByMonth} />
        <StudentDialog feeByMonth={feeByMonth} />
        <FilterDialog feeByMonth={feeByMonth} />
        {/* </div> */}
      </div>
    </>
  );
};

export default Users;
