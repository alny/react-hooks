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
    <section class="content contact">
      <div class="container">
        <div class="block-header">
          <div class="row clearfix">
            <div class="col-lg-5 col-md-5 col-sm-12">
              <h2>Developers</h2>
              <button className="btn btn-primary btn-sm">
                Add New Developer
              </button>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12">
              <ul class="breadcrumb float-md-right padding-0">
                <li class="breadcrumb-item">
                  <a href="index.html">
                    <i class="zmdi zmdi-home" />
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="javascript:void(0);">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Developers</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="tab-content">
              <div class="tab-pane active" id="Grid">
                <div class="row">
                  {developers.map((d, i) => {
                    return (
                      <div key={i} class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                          <div class="body text-center">
                            <div class="chart easy-pie-chart-1">
                              {" "}
                              <span>
                                <img
                                  src="http://kiwilandingpad.com/wp-content/uploads/2014/05/avatar-placeholder.png"
                                  alt="user"
                                  class="rounded-circle"
                                />
                              </span>{" "}
                            </div>
                            <h6>{d.Name}</h6>
                            <ul class="social-links list-unstyled">
                              <li>
                                <a title="facebook" href="#">
                                  <i class="zmdi zmdi-facebook" />
                                </a>
                              </li>
                              <li>
                                <a title="twitter" href="#">
                                  <i class="zmdi zmdi-twitter" />
                                </a>
                              </li>
                              <li>
                                <a title="instagram" href="javascript:void(0)">
                                  <i class="zmdi zmdi-instagram" />
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
