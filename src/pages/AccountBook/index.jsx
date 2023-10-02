import React, { useState } from "react";
import SideBar from "../../components/Sidebar/sidebar";
import Printer from "../../images/printer.png";
import NavBar from "../../components/NavBar/navbar";
const AccountBook = () => {
  const [fees, setFees] = useState([
    {
      challanNo: "13912999",
      challanType: "Full Semester",
      payable: "10500",
      paid: "11500",
      balance: "0",
      dueDate: "Apr 11, 2022",
      paidDate: "Apr 12, 2022",
      paymentMode: "HBL",
      action: "Paid",
    },
    {
      challanNo: "13912000",
      challanType: "Misc",
      payable: "2000",
      paid: "0",
      balance: "-2000",
      dueDate: "Apr 11, 2022",
      paidDate: "UnPaid",
      paymentMode: "",
      action: "UnPaid",
    },
  ]);
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
                    <th scope="col">Challan No.</th>
                    <th scope="col">Challan Type</th>
                    <th scope="col">Payable</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment Mode</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((x) => (
                    <tr className="align-middle">
                      <th scope="row">{x.challanNo}</th>
                      <td>{x.challanType}</td>
                      <td>{x.payable}</td>
                      <td>{x.paid}</td>
                      <td>{x.balance}</td>
                      <td>
                        <p>Due Date:{x.dueDate} </p>
                        <p>Paid Date:{x.paidDate}</p>
                      </td>
                      <td>{x.paymentMode}</td>
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
                <span className="text-primary">2,000.00</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountBook;
