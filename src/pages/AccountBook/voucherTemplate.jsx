import React from "react";

const VoucherPage = ({
  discount,
  dueDate,
  paidAmount,
  paidDate,
  payableAmount,
  voucherId,
}) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4>Voucher Details</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h6>Discount: {discount}</h6>
              <h6>Due Date: {new Date(dueDate).toLocaleDateString()}</h6>
              <h6>Paid Amount: {paidAmount}</h6>
              <h6>Paid Date: {new Date(paidDate).toLocaleString()}</h6>
              <h6>Payable Amount: {payableAmount}</h6>
              <h6>Voucher ID: {voucherId}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherPage;
