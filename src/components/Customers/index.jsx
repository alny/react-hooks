import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const fetctCustomers = async () => {
    const result = await axios("http://localhost:57422/api/customers");
    setCustomers(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetctCustomers();
  }, []);
  return (
    <section className="content">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Project Board</h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right padding-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Customers:</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          {customers.length === 0
            ? null
            : customers.map((p, i) => {
                return (
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <Link to="/projects">
                      <div className="card">
                        <div className="body">
                          <h6 className="m-b-15">{p.Name}</h6>
                          <p>Customer ID: {p.Id}</p>
                          <p>Adresse: {p.Address}</p>
                          <p>Post Nr: {p.Zip}</p>
                          <p>By: {p.City}</p>
                          <p>Email: {p.Email}</p>
                          <p>Phone: {p.Phone}</p>

                          <ul className="list-unstyled team-info m-t-20">
                            <li className="m-r-15">
                              <small className="text-muted">
                                Customer Image:
                              </small>
                            </li>
                            <li>
                              <img
                                src="assets/images/xs/avatar10.jpg"
                                title="Avatar"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                          <div className="progress-container l-black m-b-20">
                            <span className="progress-badge">Progress</span>
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
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Customers;
