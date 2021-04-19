import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Grid from "@material-ui/core/Grid";
import ServiceForm from "../ServiceForm/ServiceForm";
import TeacherForm from "../TeacherForm/TeacherForm";
import AddAdmin from "./AddAdmin/AddAdmin";

const Admin = () => {
  const [view, setView] = useState("dashboard");

  return (
    <div>
      <section>
        <div className="row">
          <div className="col-md-2 col-sm-6 col-12">
            <SideBar setView={setView}></SideBar>
          </div>
          <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
            {view === "addService" && (
              <div className="row">
                <div
                  className="col-md-6 col-sm-12"
                  style={{ paddingTop: "100px" }}
                >
                  <ServiceForm></ServiceForm>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img
                    src="https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148899113.jpg"
                    alt=""
                  />
                </div>
              </div>
            )}
            {view === "addTeacher" && (
              <div className="row pt-5">
                <div
                  className="col-md-6 col-sm-12"
                  style={{ paddingTop: "80px" }}
                >
                  <TeacherForm></TeacherForm>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img
                    style={{ width: "90%" }}
                    src="https://image.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg"
                    alt=""
                  />
                </div>
              </div>
            )}
            {view === "addAdmin" && (
              <div className="row pt-5">
                <div
                  className="col-md-6 col-sm-12"
                  style={{ paddingTop: "80px" }}
                >
                  <AddAdmin></AddAdmin>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img
                    style={{ width: "90%" }}
                    src="https://image.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg"
                    alt=""
                  />
                </div>
              </div>
            )}
            {view === "dashboard" && (
              <img
                src="https://cdn.dribbble.com/users/444229/screenshots/4246321/shopperations-ugem.gif"
                alt=""
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
