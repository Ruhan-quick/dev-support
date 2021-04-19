import React from "react";
import Left from "../Header/Left";
import "./Banner.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "",
      color: theme.palette.text.secondary,
      backgroundColor: "transparent",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid style={{ padding: "90px" }} item xs={12} sm={6}>
        <h1 style={{ color: "white", fontSize: "62px" }}>
          Welcome To Ultimate Support
        </h1>
        <h4 style={{ color: "white", marginTop: "15px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          deleniti dolores quibusdam repellendus nostrum inventore maiores
          doloremque itaque corrupti voluptatem!
        </h4>
        <br />
        <Button as={Link} to="/availableServices" variant="danger">
          Explore Services
        </Button>
      </Grid>
      <Grid style={{ padding: "60px 30px 90px 30px" }} item xs={12} sm={6}>
        <img
          style={{ width: "80%" }}
          src="https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Banner;
