import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const notifySuccess = () => toast.success("✔️ Task Created!");
var today = new Date();

const Projects = props => {
  const initialTaskState = {
    Name: "",
    Description: "",
    Created: "",
    Duration: "",
    DeveloperId: null,
    ProjectId: 0
  };
  const [task, setTask] = useState(initialTaskState);

  const [projects, setProjects] = useState([]);

  const fetctProjects = async () => {
    const result = await axios(
      `http://localhost:57422/api/customers/${
        props ? props.match.params.id : 1
      }/projects`
    );
    setProjects(result.data);
  };

  const createTask = async () => {
    const res = await axios.post(
      `http://localhost:57422/api/projects/${props.match.params.id}/tasks`,
      task
    );
    notifySuccess();
    setTask(initialTaskState);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  useEffect(() => {
    fetctProjects();
  }, []);
  return (
    <>
      <div className="modal fade" id="defaultModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Create New Task
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={task.Name}
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  value={task.Description}
                  type="text"
                  className="form-control"
                  name="Description"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={task.Duration}
                  className="form-control"
                  name="Duration"
                  placeholder="Duration"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={task.DeveloperId}
                  className="form-control"
                  name="DeveloperId"
                  placeholder="Developer Id"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => createTask()}
                type="button"
                data-dismiss="modal"
                className="btn btn-primary btn-round waves-effect"
              >
                Create
              </button>
              <button
                type="button"
                className="btn btn-danger btn-simple btn-round waves-effect"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

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
                                      <Link to={`/tasks/${p.Id}`}>
                                        {p.Name}
                                      </Link>
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
                                    <button
                                      onClick={() =>
                                        setTask({
                                          Created: today,
                                          ProjectId: p.Id
                                        })
                                      }
                                      data-toggle="modal"
                                      data-target="#defaultModal"
                                      class="btn btn-primary btn-sm"
                                    >
                                      Add Task
                                    </button>
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
      <ToastContainer />
    </>
  );
};

export default Projects;
