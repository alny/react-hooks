import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="nav navbar-nav">
            <li>
              <div className="navbar-header">
                <a href="#;" className="h-bars" />
                <a className="navbar-brand" href="#">
                  <img
                    src="assets/images/logo-black.svg"
                    width="35"
                    alt="Alpino"
                  />
                  <span className="m-l-10">Centisoft</span>
                </a>
              </div>
            </li>
            <li className="search_bar">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </li>
            <li className="dropdown">
              <a
                href="#;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
              >
                <i className="zmdi zmdi-apps" />
              </a>
              <ul className="dropdown-menu pullDown" />
            </li>

            <li className="float-right">
              <a href="#;" className="fullscreen" data-provide="fullscreen">
                <i className="zmdi zmdi-fullscreen" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="menu-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="h-menu">
                <li className="open active">
                  <a href="index.html">
                    <i className="zmdi zmdi-home" />
                  </a>
                </li>
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="mail-inbox.html">Inbox</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="mail-inbox.html">Inbox</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
