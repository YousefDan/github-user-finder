import { AiFillGithub } from "react-icons/ai";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ title }) => {
  const linkStyle = {
    color: "#FFF",
    margin: "0 10px",
    fontSize: "21px"
  }
  return (
    <div className="bg-danger p-2 text-white container-fluid d-flex justify-content-between align-items-center">
      <h1>
        <AiFillGithub /> {title}
      </h1>
      <ul className="d-flex">
        <li>
          <NavLink activeClassName="activate" style={linkStyle} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activate" style={linkStyle} exact to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
//Default Props
Navbar.defaultProps = {
  title: "Github Finder",
};
//PropTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
