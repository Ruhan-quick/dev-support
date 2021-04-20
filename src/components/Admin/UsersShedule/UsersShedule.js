import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const UsersShedule = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [specificRequests, setSpecificRequests] = useState([]);
  useEffect(() => {
    fetch(
      "http://calm-woodland-41976.herokuapp.com/showRequests?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setSpecificRequests(data));
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

  const classes = useStyles();

  return (
    <div
      style={{
        padding: "100px",
        marginLeft: "300px",
        marginRight: "300px",
        marginTop: "20px",
        marginBottom: "500px",
      }}
    >
      <h2>Specific Shedules</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">MeetingEmail</StyledTableCell>
              <StyledTableCell align="right">Bill</StyledTableCell>
              <StyledTableCell align="right">Topic</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specificRequests.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.reqEmail}</StyledTableCell>
                <StyledTableCell align="right">{row.charge}</StyledTableCell>
                <StyledTableCell align="right">{row.reqOn}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersShedule;
