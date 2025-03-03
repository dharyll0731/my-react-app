import React from 'react';

function Navbar() {
  return (
    <>
        <ul className="nav d-flex justify-content-between align-items-center  px-5 py-5 fs-2" style={{ background: "linear-gradient(to right, #000000, #252323)", zIndex: "1" }}>
          <div className="d-flex align-items-center">
            <h1 style={{ color: "#bcf002", marginRight: "10px" }}>FLORES</h1>
            <h4 style={{ color: "#bcf002" }}>D.</h4>
          </div>
          
          <div className="d-flex">
            <li className="nav-item m-2">
              <a href="https://www.facebook.com/Dharyll0731" style={{ color: "#bcf002" }}><i className="bi bi-facebook"></i></a>
            </li>
            <li className="nav-item m-2">
              <a href="https://www.instagram.com/_dhaaaaaryll/"> <i className="bi bi-instagram" style={{ color: "#bcf002" }}></i></a>
            </li>
            <li className="nav-item m-2">
              <a href="https://www.linkedin.com/in/dharyll-flores-8241382a3/"> <i className="bi bi-linkedin" style={{ color: "#bcf002" }}></i></a>
            </li>
          </div>
        </ul>
    </>
  );
}

export default Navbar;
