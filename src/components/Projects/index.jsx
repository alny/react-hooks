import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Projects = props => {
  console.log(props);
  const [projects, setProjects] = useState([]);

  const fetctProjects = async () => {
    const result = await axios(
      `http://localhost:57422/api/customers/${
        props ? props.match.params.id : 1
      }/projects`
    );
    setProjects(result.data);
  };

  useEffect(() => {
    fetctProjects();
  }, []);
  return (
    <section style={{ marginTop: "125px" }} className="content">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Projects List</h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right padding-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/customers">Customers</Link>
                </li>
                <li className="breadcrumb-item active">Projects List</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="body project_report">
                <div className="table-responsive">
                  <table className="table m-b-0 table-hover">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Project</th>
                        <th>Progress</th>
                        <th>Team</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.length === 0
                        ? null
                        : projects.map((p, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  <span className="badge badge-success">
                                    Active
                                  </span>
                                </td>
                                <td className="project-title">
                                  <h6>
                                    <Link to={`/tasks/${p.Id}`}>{p.Name}</Link>
                                  </h6>
                                  <small>Due date: {p.DueDate}</small>
                                </td>{" "}
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar l-dark"
                                      role="progressbar"
                                      aria-valuenow="48"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: "48%" }}
                                    />
                                  </div>
                                  <small>Completion with: 48%</small>
                                </td>
                                <td>
                                  <ul className="list-unstyled team-info">
                                    <li>
                                      <img
                                        src="/assets/images/xs/avatar1.jpg"
                                        alt="Avatar"
                                      />
                                    </li>
                                    <li>
                                      <img
                                        src="/assets/images/xs/avatar2.jpg"
                                        alt="Avatar"
                                      />
                                    </li>
                                    <li>
                                      <img
                                        src="/assets/images/xs/avatar3.jpg"
                                        alt="Avatar"
                                      />
                                    </li>
                                  </ul>
                                </td>
                                <td className="project-actions">
                                  <a
                                    href="#"
                                    className="btn btn-neutral btn-sm"
                                  >
                                    <i className="zmdi zmdi-eye" />
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-neutral btn-sm"
                                  >
                                    <i className="zmdi zmdi-edit" />
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>
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
