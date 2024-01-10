import React, { useEffect, useState } from "react";
import SideBar from "../../components/Sidebar/sidebar";
import View from "../../images/view.png";
import Edit from "../../images/edit.png";
import FeeIcon from "../../images/fee.png";
import NavBar from "../../components/NavBar/navbar";
import FeeDialog from "../Student/feeDialog";
import StudentDialog from "../Student/studentDialog.jsx";
import FilterDialog from "../Student/filter";
import axios from "axios";
import { baseURL } from "../../utils/baseRoute.js";

const FeeReport = ({ activeItem, setActiveItem }) => {
  const [student, setStudent] = useState([]);
  const [studentDetail, setStudentDetail] = useState({});
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

  const handleApplyFilter = (filterValues) => {
    axios({
      method: "post",
      url: baseURL + "student/generateReport",
      data: {
        grade: filterValues.grade,
        status: filterValues.status,
        month: filterValues.month,
      },
    })
      .then(({ data }) => {
        console.log(data.data.students);
        setStudent(data.data.students);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />

        <div style={{ flex: "1", padding: "10px" }}>
          <h2>Fee Report</h2>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <button
              className="btn btn-primary m-2"
              data-bs-target="#filterBackdrop"
              data-bs-toggle="modal"
            >
              Apply Filter
            </button>
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
                      {Number(x.totalPaidAmount) - Number(x.totalPayableAmount)}
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
                        onClick={() => setStudentDetail(x)}
                        data-bs-toggle="modal"
                      />
                      <img
                        title="Fee"
                        src={FeeIcon}
                        width={24}
                        height={24}
                        onClick={() => setStudentDetail(x)}
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
        {/* <div class="modal-dialog modal-dialog-scrollable" id="staticBackdrop"> */}
        {/* <FeeDialog feeByMonth={feeByMonth} disabled={true} /> */}
        {/* <StudentDialog feeByMonth={feeByMonth} /> */}
        {studentDetail?.firstName && (
          <FeeDialog
            feeByMonth={studentDetail}
            setStudentDetail={setStudentDetail}
            changeHandler={() => {}}
            feeSubmitHandler={() => {}}
            disabled={true}
          />
        )}

        {studentDetail?.firstName && (
          <StudentDialog
            studentDetail={studentDetail}
            setStudentDetail={setStudentDetail}
          />
        )}
        <FilterDialog handleApplyFilter={handleApplyFilter} />
        {/* </div> */}
      </div>
    </>
  );
};

export default FeeReport;
