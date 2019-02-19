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
    <section className="content profile-page">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Developers</h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right padding-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active">Developers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          {developers.map((d, i) => {
            return (
              <div key={i} className="col-lg-12 col-md-12">
                <Link to="/projects">
                  <div className="card">
                    <div className="body bg-dark profile-header">
                      <div className="row">
                        <div className="col-lg-10 col-md-12">
                          <img
                            src="https://www.rpnation.com/gallery/250-x-250-placeholder.30091/full"
                            className="user_pic rounded img-raised"
                            alt="User"
                          />
                          <div className="detail">
                            <div className="u_name">
                              <h4>
                                <strong>{d.Name}</strong>
                              </h4>
                              <span>Full Stack Developer</span>
                              <br />
                              <span>Email: {d.Email}</span>
                            </div>
                            <div id="m_area_chart" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-12 user_earnings">
                          <h6>Total Earnings</h6>
                          <h4>
                            $<small className="number count-to">2124</small>
                          </h4>
                          <span>
                            Average 39%{" "}
                            <i className="zmdi zmdi-caret-up text-success" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Developers;
