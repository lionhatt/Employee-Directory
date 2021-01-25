import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className="navbar-nav me-auto mb-2 mb-lg-0 dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort
                    </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <button className="dropdown-item" type="button" onClick={() => props.sortEmployeeName()} >Name</button>
                            <button className="dropdown-item" type="button" onClick={() => props.sortEmployeeOccupation()} >Occupation</button>
                            <button className="dropdown-item" type="button" onClick={() => props.sortEmployeeLocation()} >Location</button>
                        </div>
                    </div>

                    <form className="d-flex">
                        <input value={props.filter} className="form-control me-2" type="text" placeholder="Enter a name" aria-label="Search" onChange={(event) => props.handleInputChange(event)} />
                        <button className="btn btn-outline-success" type="submit" onClick={(event) => props.filterEmployee(event)}>Filter</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;