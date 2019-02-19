import React from "react";

const Tasks = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Project Tasks:</h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right padding-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Charts</a>
                </li>
                <li className="breadcrumb-item active">Editable Tables</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>Edit</strong> Projects Tasks
                </h2>
                <ul className="header-dropdown">
                  <li className="dropdown">
                    {" "}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="zmdi zmdi-more" />{" "}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:void(0);">Action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Another action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Something else</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="boxs-close">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-default pull-right add-row">
                      <i className="fa fa-plus" />
                      &nbsp;&nbsp; Add Row
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-bordered" id="editableTable">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Birthday</th>
                          <th>Age</th>
                          <th>Sex</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-id="1">
                          <td data-field="name">Dave Gamache</td>
                          <td data-field="birthday">May 19, 2015</td>
                          <td data-field="age">26</td>
                          <td data-field="sex">Male</td>
                          <td>
                            <a
                              className="button button-small edit"
                              title="Edit"
                            >
                              <i className="zmdi zmdi-edit" />
                            </a>

                            <a
                              className="button button-small edit"
                              title="Delete"
                            >
                              <i className="zmdi zmdi-delete" />
                            </a>
                          </td>
                        </tr>
                        <tr data-id="2">
                          <td data-field="name">Dwayne Johnson</td>
                          <td data-field="birthday">May 19, 2015</td>
                          <td data-field="age">42</td>
                          <td data-field="sex">Male</td>
                          <td>
                            <a
                              className="button button-small edit"
                              title="Edit"
                            >
                              <i className="zmdi zmdi-edit" />
                            </a>{" "}
                            <a
                              className="button button-small edit"
                              title="Delete"
                            >
                              <i className="zmdi zmdi-delete" />
                            </a>
                          </td>
                        </tr>
                        <tr data-id="3">
                          <td data-field="name">Halyna Nadia</td>
                          <td data-field="birthday">May 25, 2015</td>
                          <td data-field="age">22</td>
                          <td data-field="sex">Female</td>
                          <td>
                            <a
                              className="button button-small edit"
                              title="Edit"
                            >
                              <i className="zmdi zmdi-edit" />
                            </a>{" "}
                            <a className="button button-small" title="Delete">
                              <i className="zmdi zmdi-delete" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
