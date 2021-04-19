import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
// import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const SideBar = ({ setView }) => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-12 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link
            onClick={() => setView("dashboard")}
            as={Link}
            to="/dashboard"
            className="text-white"
          >
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link as={Link} to="/home" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        <div>
          <li>
            <Link onClick={() => setView("shedule")} className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Sheduels</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => setView("students")} className="text-white">
              <FontAwesomeIcon icon={faUsers} /> <span>Students</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => setView("addTeacher")} className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Teacher</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => setView("addService")} className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => setView("addAdmin")} className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>Add Admin</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => setView("setting")} className="text-white">
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
