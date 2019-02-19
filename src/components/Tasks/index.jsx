import React, { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const result = await axios("http://localhost:57422/api/projects/1/tasks");
    setTasks(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
                  <a href="#">Projects</a>
                </li>
                <li className="breadcrumb-item active">Projects Tasks</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>Projects Tasks</strong>
                </h2>
                <ul className="header-dropdown">
                  <li className="dropdown">
                    {" "}
                    <a
                      href="#"
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
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else</a>
                      </li>
                      <li>
                        <a href="#" className="boxs-close">
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
                      &nbsp;&nbsp; Add Task
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-bordered" id="editableTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Duration</th>
                          <th>Created At</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.length === 0
                          ? null
                          : tasks.map((t, i) => {
                              return (
                                <tr data-id={t.Id}>
                                  <td data-field="id">{t.Id}</td>
                                  <td data-field="name">{t.Name}</td>
                                  <td data-field="description">
                                    {t.Description}
                                  </td>
                                  <td data-field="duration">{t.Duration}</td>
                                  <td data-field="createdAt">{t.Created}</td>
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
      </div>
    </section>
  );
};

export default Tasks;
