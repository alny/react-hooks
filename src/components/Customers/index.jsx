import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Customers = () => {
  const initialFormState = {
    Name: "",
    Email: "",
    Address: "",
    City: "",
    Country: "",
    Zip: "",
    Phone: ""
  };

  const [customers, setCustomers] = useState([]);
  const [customer, setcustomer] = useState(initialFormState);

  const fetctCustomers = async () => {
    const result = await axios("http://localhost:57422/api/customers");
    setCustomers(result.data);
  };

  const createCustomer = async () => {
    const result = await axios.post(
      "http://localhost:57422/api/customers/1",
      customer
    );
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setcustomer({ ...customer, [name]: value });
    console.log(customer);
  };

  useEffect(() => {
    fetctCustomers();
  }, []);
  return (
    <>
      <div className="modal fade" id="largeModal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="largeModalLabel">
                Add New Customer
              </h4>
            </div>
            <div className="modal-body">
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.Name}
                  type="text"
                  class="form-control"
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.Email}
                  type="text"
                  class="form-control"
                  name="Email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.Address}
                  type="text"
                  class="form-control"
                  name="Address"
                  placeholder="Address"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.City}
                  type="text"
                  class="form-control"
                  name="City"
                  placeholder="City"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.Country}
                  type="text"
                  class="form-control"
                  name="Country"
                  placeholder="Country"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.Zip}
                  type="text"
                  class="form-control"
                  name="Zip"
                  placeholder="Zip"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleInputChange}
                  value={customer.Phone}
                  type="text"
                  class="form-control"
                  name="Phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => createCustomer()}
                data-dismiss="modal"
                type="button"
                className="btn btn-default btn-round waves-effect"
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
      <section className="content">
        <div className="container">
          <div className="block-header">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <h2>Project Board</h2>
                <a
                  href="#largeModal"
                  data-toggle="modal"
                  data-target="#largeModal"
                >
                  <button className="btn btn-primary btn-sm">
                    Add New Customer
                  </button>
                </a>
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
                    <div
                      key={i}
                      className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                    >
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
    </>
  );
};

export default Customers;
