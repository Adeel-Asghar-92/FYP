import React, { useEffect, useState } from "react";
import SideBar from "../../components/Sidebar/sidebar";
import Printer from "../../images/printer.png";
import NavBar from "../../components/NavBar/navbar";
import axios from "axios";
import { baseURL } from "../../utils/baseRoute";
const AccountBook = () => {
  const [fees, setFees] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  useEffect(() => {
    axios({
      method: "post",
      url: baseURL + "auth/getStudentsByEmail",
      data: {
        email: localStorage.getItem("email"),
      },
    })
      .then(({ data }) => {
        console.log(data.data.students);
        const filtered = data.data.student.feeAccount.filter(
          (x) => Number(x.payableAmount) > 0
        );
        function calculateTotalBalance(data) {
          let totalBalancee = 0;

          data.forEach((entry) => {
            const balance =
              Number(entry.payableAmount) -
              Number(entry.discount) -
              Number(entry.paidAmount);
            totalBalancee += balance;
          });

          return totalBalancee;
        }
        const totalBalancee = calculateTotalBalance(filtered);
        setTotalBalance(totalBalancee);
        setFees(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-12 col-md-2 p-0">
            <SideBar />
          </div> */}
          {/* <div className="col-12 col-md-9 mt-3"> */}
          <NavBar />
          <div className="col-12 col-md-12 mt-3">
            <h2>AccountBook</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-secondary border-white">
                  <tr>
                    <th scope="col">Voucher No.</th>
                    <th scope="col">Payable</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((x) => (
                    <tr className="align-middle">
                      <th scope="row">{x.voucherId}</th>
                      <td>{Number(x.payableAmount) - Number(x.discount)}</td>
                      <td>{x.paidAmount}</td>
                      <td>
                        {Number(x.payableAmount) -
                          Number(x.discount) -
                          Number(x.paidAmount)}
                      </td>
                      <td>
                        <p>Due Date:{x.dueDate.slice(0, 10)} </p>
                        <p>Paid Date:{x?.paidDate?.slice(0, 10)}</p>
                      </td>
                      <td className="text-center">
                        <img src={Printer} width={30} height={30} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h6>
                {" "}
                Total Payable Amount:{" "}
                <span className="text-primary">{totalBalance}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountBook;
