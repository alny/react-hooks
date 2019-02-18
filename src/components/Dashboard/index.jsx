import React from "react";

const Dashboard = () => {
  return (
    <section className="content home">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Dashboard</h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right padding-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="card tasks_report">
              <div className="body">
                <input
                  type="text"
                  className="knob"
                  value="66"
                  data-width="90"
                  data-height="90"
                  data-thickness="0.1"
                  data-fgColor="#26dad2"
                  readonly
                />
                <h6 className="m-t-20">Satisfaction Rate</h6>
                <p className="displayblock m-b-0">
                  47% Average <i className="zmdi zmdi-trending-up" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="card tasks_report">
              <div className="body">
                <input
                  type="text"
                  className="knob dial2"
                  value="26"
                  data-width="90"
                  data-height="90"
                  data-thickness="0.1"
                  data-fgColor="#7b69ec"
                  readonly
                />
                <h6 className="m-t-20">Project Panding</h6>
                <p className="displayblock m-b-0">
                  13% Average <i className="zmdi zmdi-trending-down" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="card tasks_report">
              <div className="body">
                <input
                  type="text"
                  className="knob dial3"
                  value="76"
                  data-width="90"
                  data-height="90"
                  data-thickness="0.1"
                  data-fgColor="#f9bd53"
                  readonly
                />
                <h6 className="m-t-20">Productivity Goal</h6>
                <p className="displayblock m-b-0">
                  75% Average <i className="zmdi zmdi-trending-up" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="card tasks_report">
              <div className="body">
                <input
                  type="text"
                  className="knob dial4"
                  value="88"
                  data-width="90"
                  data-height="90"
                  data-thickness="0.1"
                  data-fgColor="#00adef"
                  readonly
                />
                <h6 className="m-t-20">Total Revenue</h6>
                <p className="displayblock m-b-0">
                  54% Average <i className="zmdi zmdi-trending-up" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>Monthly</strong> Earnings
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
                <canvas id="line_chart" className="m-b-20" height="150" />
                <div className="row text-center">
                  <div className="col-4">
                    <h4 className="margin-0">5,124</h4>
                    <p>Marketplace</p>
                  </div>
                  <div className="col-4">
                    <h4 className="margin-0">349</h4>
                    <p>Last week</p>
                  </div>
                  <div className="col-4">
                    <h4 className="margin-0">821</h4>
                    <p>Last Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>Revenue</strong>
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
                <canvas id="bar_chart" className="m-b-20" height="150" />
                <div className="row text-center">
                  <div className="col-4">
                    <h4 className="margin-0">5,124</h4>
                    <p>Marketplace</p>
                  </div>
                  <div className="col-4">
                    <h4 className="margin-0">349</h4>
                    <p>Last week</p>
                  </div>
                  <div className="col-4">
                    <h4 className="margin-0">821</h4>
                    <p>Last Month</p>
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

export default Dashboard;
