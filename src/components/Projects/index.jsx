import React, { useState, useEffect } from "react";
import axios from "axios";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetctProjects = async () => {
    const result = await axios(
      "http://localhost:57422/api/customers/1/projects"
    );
    setProjects(result.data);
    console.log(result.data);
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
                  <a href="#">Test</a>
                </li>
                <li className="breadcrumb-item active">Projects:</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          {projects.length === 0
            ? null
            : projects.map((p, i) => {
                return (
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                      <div className="body">
                        <h6 className="m-b-15">{p.Name}</h6>
                        <p>Project ID: {p.Id}</p>
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
                            <h6>BUDGET: 2,170 USD</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
