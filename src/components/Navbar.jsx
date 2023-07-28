import {} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a href="#" className="navlogo">
            <img src="./Images/navprofile2.png" width={40} alt="" />
          </a>
          

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto fw-bold">
              <a className="nav-link text-white" href="#">
                About
              </a>
              <a className="nav-link text-white" href="#">
                Projects
              </a>
              {/* <a className="nav-link text-white" href="#"> */}
                {/* Resume */}
              {/* </a> */}
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
