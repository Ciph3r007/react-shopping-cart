import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cart{" "}
            <span className="badge rounded-pill bg-info text-dark">
              {this.props.total}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
