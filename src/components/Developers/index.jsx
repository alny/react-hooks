import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const notifySuccess = () => toast.success("✔️ Developer Created!");
const notifyEdit = () => toast.success("✔️ Developer has been edited!");
const notifyWarning = () => toast.warning("🗑️ Developer Deleted!");

const Developers = () => {
  const initialDeveloperState = {
    Name: "",
    Email: ""
  };

  const [developers, setDevelopers] = useState([]);
  const [devId, setDevId] = useState(0);

  const [developer, setDeveloper] = useState(initialDeveloperState);

  const fetctDevelopers = async () => {
    const result = await axios("http://localhost:57422/api/developers");
    setDevelopers(result.data);
  };

  const createDeveloper = async () => {
    const res = await axios.post(
      "http://localhost:57422/api/developers",
      developer
    );
    notifySuccess();
    setDevelopers([...developers, res.data]);
    setDeveloper(initialDeveloperState);
  };

  const deleteDeveloper = async () => {
    await axios.delete(`http://localhost:57422/api/developers/${devId}`);
    const newDev = developers.filter(e => e.Id !== devId);
    setDevelopers(newDev);
    notifyWarning();
  };

  const editDeveloper = async () => {
    const response = await axios.put(
      `http://localhost:57422/api/developers/${devId}`,
      developer
    );
    const newDevelopers = developers.filter(e => e.Id !== devId);
    setDevelopers([...newDevelopers, response.data]);
    notifyEdit();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setDeveloper({ ...developer, [name]: value });
  };

  useEffect(() => {
    fetctDevelopers();
  }, []);
  return (
    <>
      <div className="modal fade" id="defaultModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Create Developer
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  value={developer.Name}
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  value={developer.Email}
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => createDeveloper()}
                type="button"
                data-dismiss="modal"
                className="btn btn-primary btn-round waves-effect"
              >
                Create
              </button>
              <button
                onClick={() => editDeveloper()}
                type="button"
                data-dismiss="modal"
                className="btn btn-primary btn-round waves-effect"
              >
                Edit
              </button>
              <button
                onClick={() => deleteDeveloper()}
                type="button"
                data-dismiss="modal"
                className="btn btn-primary btn-round waves-effect"
              >
                Delete
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
      <section style={{ marginTop: "125px" }} className="content contact">
        <div className="container">
          <div className="block-header">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <h2>Developers</h2>
                <button
                  data-toggle="modal"
                  data-target="#defaultModal"
                  className="btn btn-primary btn-sm"
                >
                  Add New Developer
                </button>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <ul className="breadcrumb float-md-right padding-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="zmdi zmdi-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Developers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="tab-pane active" id="Grid">
                  <div className="row">
                    {developers.map((d, i) => {
                      return (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                          <a
                            data-toggle="modal"
                            data-target="#defaultModal"
                            href="#"
                            onClick={() => setDevId(d.Id)}
                          >
                            <div className="card">
                              <div className="body text-center">
                                <div className="chart easy-pie-chart-1">
                                  {" "}
                                  <span>
                                    <img
                                      src="http://kiwilandingpad.com/wp-content/uploads/2014/05/avatar-placeholder.png"
                                      alt="user"
                                      className="rounded-circle"
                                    />
                                  </span>{" "}
                                </div>
                                <h6>{d.Name}</h6>
                                <p>
                                  Developer Id: <b>{d.Id}</b>
                                </p>

                                <ul className="social-links list-unstyled">
                                  <li>
                                    <a title="facebook" href="#">
                                      <i className="zmdi zmdi-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="twitter" href="#">
                                      <i className="zmdi zmdi-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      title="instagram"
                                      href="javascript:void(0)"
                                    >
                                      <i className="zmdi zmdi-instagram" />
                                    </a>
                                  </li>
                                </ul>
                                <small>{d.Email}</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
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

export default Developers;
