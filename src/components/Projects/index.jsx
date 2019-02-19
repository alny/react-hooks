import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState();

  const fetctProjects = async () => {
    const result = await fetch("http://localhost:57422/api/customers");
    setProjects(result);
    console.log(result);
  };

  useEffect(() => {
    fetctProjects();
  }, []);

  return (
    <section className="content">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Task Board</h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right padding-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Test</a>
                </li>
                <li className="breadcrumb-item active">Tasks Board</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>MT</strong> - Marketing Team{" "}
                  <small>Ranking 4th</small>
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
                <h6 className="m-b-15">Info about Marketing Team</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <ul className="list-unstyled team-info m-t-20">
                  <li className="m-r-15">
                    <small className="text-muted">Team</small>
                  </li>
                  <li>
                    <img
                      src="assets/images/xs/avatar10.jpg"
                      title="Avatar"
                      alt="Avatar"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/xs/avatar9.jpg"
                      title="Avatar"
                      alt="Avatar"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/xs/avatar8.jpg"
                      title="Avatar"
                      alt="Avatar"
                    />
                  </li>
                </ul>
                <div className="progress-container l-black m-b-20">
                  <span className="progress-badge">Prograss</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="progress-value">78%</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <small>PROJECTS: 08</small>
                    <h6>BUDGET: 2,170 USD</h6>
                  </div>
                  <div className="col-5">
                    <div
                      className="sparkline text-right m-t-10"
                      data-type="bar"
                      data-width="97%"
                      data-height="26px"
                      data-bar-Width="2"
                      data-bar-Spacing="7"
                      data-bar-Color="#f96332"
                    >
                      6,2,3,4,8,7,6,2
                    </div>
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

export default Projects;
