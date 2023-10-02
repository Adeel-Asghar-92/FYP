import React from "react";
const FeeDialog = ({ feeByMonth, disabled }) => {
  return (
    <div
      class="modal fade"
      id="feeBackdrop"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
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
            ></button>
          </div>
          <div class="modal-body">
            <table className="table table-bordered table-hover">
              <thead className="table-secondary border-white">
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeByMonth.map((x) => (
                  <tr className="align-middle">
                    <th scope="row">{x.month}</th>

                    <td>
                      <input type="number" name="fee" disabled={disabled} />
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
            >
              Close
            </button>
            {!disabled && (
              <button
                type="button"
                class="btn btn-primary"
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
