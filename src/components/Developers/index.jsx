import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  const fetctDevelopers = async () => {
    const result = await axios("http://localhost:57422/api/developers");
    setDevelopers(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetctDevelopers();
  }, []);
  return (
    <section style={{ marginTop: "125px" }} className="content contact">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Developers</h2>
              <button className="btn btn-primary btn-sm">
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
                                <a title="instagram" href="javascript:void(0)">
                                  <i className="zmdi zmdi-instagram" />
                                </a>
                              </li>
                            </ul>
                            <small>{d.Email}</small>
                          </div>
                        </div>
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
  );
};

export default Developers;
