import React from "react";

const Header = () => {
  
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ml-auto p-2 " href="#">CRUD App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
           
          </ul>

        </div>
      </nav>
    )
}

export default Header;