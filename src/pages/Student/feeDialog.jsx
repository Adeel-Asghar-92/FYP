import React from "react";
const FeeDialog = ({
  feeByMonth,
  changeHandler,
  disabled,
  feeSubmitHandler,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div
      class="modal fade"
      id="feeBackdrop"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Fee Detail
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
          <div class="modal-body">
            <table className="table table-bordered table-hover">
              <thead className="table-secondary border-white">
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Fee</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Payable</th>
                  <th scope="col">Paid Amount</th>
                </tr>
              </thead>
              <tbody>
                {feeByMonth.feeAccount.length > 0 &&
                  feeByMonth.feeAccount.map((x, i) => (
                    <tr className="align-middle">
                      <th scope="row">{months[i]}</th>
                      <td>
                        <input
                          type="number"
                          name="payableAmount"
                          onChange={(e) =>
                            changeHandler({
                              name: "payableAmount",
                              value: e.target.value,
                              id: x._id,
                            })
                          }
                          value={x.payableAmount}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="discount"
                          onChange={(e) =>
                            changeHandler({
                              name: "discount",
                              value: e.target.value,
                              id: x._id,
                            })
                          }
                          value={x.discount}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={Number(x.payableAmount) - Number(x.discount)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="paidAmount"
                          onChange={(e) =>
                            changeHandler({
                              name: "paidAmount",
                              value: e.target.value,
                              id: x._id,
                            })
                          }
                          value={x.paidAmount}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
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
            {!disabled && (
              <button
                type="button"
                class="btn btn-primary"
                onClick={feeSubmitHandler}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeDialog;
