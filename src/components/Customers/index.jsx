import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Customers = () => {
  var today = new Date();
  const initialCustomerState = {
    Id: 0,
    Name: "",
    Email: "",
    Address: "",
    City: "",
    Country: "",
    Zip: "",
    Phone: ""
  };
  const initialProjectState = {
    Id: 0,
    Name: "",
    DueDate: ""
  };

  const notifySuccess = () => toast.success("🧔 Customer Created!");
  const notifyProjectSuccess = () => toast.success("🧔 Project Created!");
  const notifyWarning = () => toast.warning("👴 Customer Deleted!");

  const [customers, setCustomers] = useState([]);
  const [customer, setcustomer] = useState(initialCustomerState);
  const [project, setProject] = useState(initialProjectState);

  const [editing, setEditing] = useState(false);

  const fetctCustomers = async () => {
    const result = await axios("http://localhost:57422/api/customers");
    setCustomers(result.data);
  };

  const fetctSingleCustomer = async id => {
    setEditing(true);
    const response = await axios.get(
      `http://localhost:57422/api/customers/${id}`
    );
    setcustomer({ ...response.data, Id: id });
  };

  const createCustomer = async () => {
    const response = await axios.post(
      "http://localhost:57422/api/customers/1",
      customer
    );
    notifySuccess();
    setCustomers([...customers, response.data]);
  };

  const createProject = async () => {
    const res = await axios.post(
      `http://localhost:57422/api/customers/${project.Id}/projects`,
      project
    );
    notifyProjectSuccess();
  };

  const editCustomers = async () => {
    const response = await axios.put(
      `http://localhost:57422/api/customers/${customer.Id}`,
      customer
    );
    const newCustomers = customers.filter(e => e.Id !== customer.Id);
    setCustomers([...newCustomers, response.data]);
  };

  const deleteCustomer = async id => {
    await axios.delete(`http://localhost:57422/api/customers/${id}`);
    const newCustomers = customers.filter(e => e.Id !== id);
    notifyWarning();
    setCustomers(newCustomers);
  };

  const handleCustomerInputChange = event => {
    const { name, value } = event.target;
    setcustomer({ ...customer, [name]: value });
  };

  const handleProjectInputChange = event => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  useEffect(() => {
    fetctCustomers();
  }, []);
  return (
    <>
      <div className="modal fade" id="defaultModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Create Project
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  onChange={handleProjectInputChange}
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => createProject()}
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
      <div className="modal fade" id="largeModal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="largeModalLabel">
                Add New Customer
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.Name}
                  type="text"
                  required
                  minLength="2"
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.Email}
                  type="text"
                  required
                  minLength="3"
                  className="form-control"
                  name="Email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.Address}
                  type="text"
                  className="form-control"
                  name="Address"
                  placeholder="Address"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.City}
                  type="text"
                  className="form-control"
                  name="City"
                  placeholder="City"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.Country}
                  type="text"
                  className="form-control"
                  name="Country"
                  placeholder="Country"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.Zip}
                  type="text"
                  className="form-control"
                  name="Zip"
                  placeholder="Zip"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleCustomerInputChange}
                  value={customer.Phone}
                  type="text"
                  className="form-control"
                  name="Phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="modal-footer">
              {!editing ? (
                <button
                  onClick={() => createCustomer()}
                  data-dismiss="modal"
                  type="button"
                  className="btn btn-default btn-round waves-effect"
                >
                  Create
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => editCustomers()}
                  className="btn btn-danger btn-simple btn-round waves-effect"
                  data-dismiss="modal"
                >
                  Save Edit
                </button>
              )}
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
                  <button
                    onClick={() => (
                      setEditing(false), setcustomer(initialCustomerState)
                    )}
                    className="btn btn-primary btn-sm"
                  >
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
                      <div className="card">
                        <div className="body">
                          <Link to={`/projects/${p.Id}`}>
                            <h6 className="m-b-15">
                              <ul
                                style={{ marginTop: "-5px" }}
                                className="list-unstyled team-info m-t-20"
                              >
                                <li>
                                  <li
                                    style={{
                                      marginRight: "15px",
                                      color: "black"
                                    }}
                                  >
                                    {p.Name}{" "}
                                  </li>
                                  <img
                                    style={{ height: "40px", width: "40px" }}
                                    src="https://www.ucn.dk/Files/Billeder/ucn/Om-UCN/Presse/DG-Logo-Bom%C3%A6rke.jpg"
                                    title="Avatar"
                                    alt="Avatar"
                                  />
                                </li>
                              </ul>
                            </h6>
                          </Link>
                          <p>Customer ID: {p.Id}</p>
                          <p>Adresse: {p.Address}</p>
                          <p>Post Nr: {p.Zip}</p>
                          <p>By: {p.City}</p>
                          <p>Email: {p.Email}</p>
                          <p>Phone: {p.Phone}</p>

                          <div className="row">
                            <div className="col-7">
                              <button
                                data-toggle="modal"
                                data-target="#defaultModal"
                                onClick={() =>
                                  setProject({
                                    Id: p.Id,
                                    DueDate: today
                                  })
                                }
                                className="btn btn-primary btn-sm"
                              >
                                Add Project
                              </button>
                            </div>
                            <a
                              href="#largeModal"
                              data-toggle="modal"
                              data-target="#largeModal"
                            >
                              <button
                                onClick={() => fetctSingleCustomer(p.Id)}
                                className="btn btn-primary btn-sm"
                              >
                                Edit
                              </button>
                            </a>
                            <button
                              onClick={() => deleteCustomer(p.Id)}
                              className="btn btn-primary btn-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Customers;
