import React, { useContext, useEffect, useState } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Form } from "react-bootstrap";
const AdminsShedules = () => {
  const [allRequests, setAllRequests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showAllRequest")
      .then((res) => res.json())
      .then((data) => setAllRequests(data));
  }, []);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const updateStatus = (id) => {
    const status = document.getElementById("status").value;
    console.log("updateStatus worked");
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updated");
        alert("Status Updated");
      });
  };

  const handleOnChange = (id) => {
    console.log("updateOnChange worked");
    fetch(`http://localhost:5000/request/${id}`)
      .then((res) => res.json())
      .then((data) => updateStatus(data._id));
  };
  let i = 1;
  const classes = useStyles();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admins shedules / all shedules</h2>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Meeting Email</th>
            <th>Topic</th>
            <th>Charge</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {allRequests.map((ar) => (
            <tr>
              <td>{i++}</td>
              <td>{ar.name}</td>
              <td>{ar.reqEmail}</td>
              <td>{ar.reqOn}</td>
              <td>{ar.charge}</td>
              <td>{ar.status}</td>
              <td>
                {" "}
                <Form>
                  <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                      id="status"
                      onChange={() => handleOnChange(ar._id)}
                      as="select"
                    >
                      <option>Pending</option>
                      <option>Going</option>
                      <option>Done</option>
                    </Form.Control>
                  </Form.Group>
                </Form>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminsShedules;
