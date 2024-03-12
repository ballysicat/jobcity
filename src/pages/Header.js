import profile from "./images/profileimg.png";
import { Link } from "react-router-dom";
function Header(prop) {
  var slidelink = () => {
    var tmp = document.querySelector("#slide");
    tmp.classList.remove("drop-hide");
    tmp.classList.add("drop-link");
  };
  return (
    <>
      <div className="nav-div">
        <div className="logo-div">
          Job
          <span
            style={{
              color: "#11ec09",
              margin: 0,
              padding: 0,
              paddingLeft: "2px",
            }}
          >
            C
          </span>
          ity
        </div>
        <div className="link-nav">
          <Link to="/">
            <span
              style={
                prop.name === "joblist" ? { color: "#fff" } : { color: "#000" }
              }
            >
              Job seeker
            </span>
          </Link>
          <Link to="/employer">
            <span
              style={
                prop.name === "employer" ? { color: "#fff" } : { color: "#000" }
              }
            >
              Employer
            </span>
          </Link>
          <Link to="/about">
            <span
              style={
                prop.name === "about" ? { color: "#fff" } : { color: "#000" }
              }
            >
              About
            </span>
          </Link>
        </div>
        <span>
          <Link to="/seeker">
            <img src={profile} alt="profile" />
          </Link>
        </span>
      </div>
      <div className="drop-nav" onClick={slidelink}>
        <div></div> <div></div>
        <div></div>
        {/* <img className="drop-icon" src={dropdown} alt="dropimg"/> */}
      </div>
      <div id="slide" className="drop-list drop-hide">
        <Link to="/">
          <span>Joblist</span>
        </Link>
        <Link to="/employer">
          <span>Employer</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/seeker">
          <span>profile</span>
        </Link>
      </div>
    </>
  );
}

export default Header;
