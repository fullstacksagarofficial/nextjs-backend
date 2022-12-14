import React from "react";

const Form = () => {
  return (
    <>
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Product</h4>
            <form className="form-sample">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      First Name
                    </label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Last Name</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Gender</label>
                    <div className="col-sm-9">
                      <select className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Category</label>
                    <div className="col-sm-9">
                      <select className="form-control">
                        <option>Category1</option>
                        <option>Category2</option>
                        <option>Category3</option>
                        <option>Category4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Membership
                    </label>
                    <div className="col-sm-4">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="membershipRadios"
                            id="membershipRadios1"
                            defaultValue=""
                            defaultChecked=""
                          />
                          Free
                          <i className="input-helper" />
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="membershipRadios"
                            id="membershipRadios2"
                            defaultValue="option2"
                          />
                          Professional
                          <i className="input-helper" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-icon-text">
                <i className="ti-upload btn-icon-prepend"></i>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
