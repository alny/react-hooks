import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  const fetctCustomers = async () => {
    const result = await axios("http://localhost:57422/api/customers");
    setCustomers(result.data);
  };

  useEffect(() => {
    fetctCustomers();
  }, []);
  return (
    <section style={{ marginTop: "125px" }} className="content">
      <div className="container">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Overview:</h2>
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
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body l-parpl text-center">
                <h3
                  className="m-b-0 m-t-10 text-white number count-to"
                  data-from="0"
                  data-to="2078"
                  data-speed="2000"
                  data-fresh-interval="700"
                >
                  2078
                </h3>
                <span className="text-white">Projects</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body l-seagreen text-center">
                <h3
                  className="m-b-0 m-t-10 text-white number count-to"
                  data-from="0"
                  data-to="1278"
                  data-speed="2000"
                  data-fresh-interval="700"
                >
                  1278
                </h3>
                <span className="text-white">Tasks</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body l-amber text-center">
                <h3
                  className="m-b-0 m-t-10 text-white number count-to"
                  data-from="0"
                  data-to="52100"
                  data-speed="500"
                  data-fresh-interval="700"
                >
                  52100
                </h3>
                <span className="text-white">Lines of Code</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body l-blue text-center">
                <h3
                  className="m-b-0 m-t-10 text-white number count-to"
                  data-from="0"
                  data-to="9780000"
                  data-speed="2000"
                  data-fresh-interval="700"
                >
                  9780000
                </h3>
                <span className="text-white">Total Earnings $</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>Customer</strong> overview:
                </h2>
              </div>
              <div className="body">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Projects</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.length === 0
                        ? null
                        : customers.map((p, i) => {
                            return (
                              <tr key={i}>
                                <td>{p.Id}</td>
                                <td>{p.Name}</td>
                                <td>{p.Address}</td>
                                <td>{p.City}</td>
                                <td>{p.Country}</td>
                                <td>{p.Email}</td>
                                <td>{p.Phone}</td>
                                <td>
                                  <span className="badge badge-success">
                                    Active
                                  </span>
                                </td>
                                <td>24-04-2018</td>
                                <td>
                                  <Link to={`/projects/${p.Id}`}>
                                    <button className="btn btn-primary btn-sm">
                                      See Projects
                                    </button>
                                  </Link>
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

export default Dashboard;
