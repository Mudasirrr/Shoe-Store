import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FaFacebookF,FaAward ,FaLinkedin, FaGithub } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { facebookURL, linkedInURL, githubURL,portfolioURL } from "../utils/social";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  btn: {
    color: theme.palette.secondary.contrastText,

  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer} style={{background:"purple"}}>
      <Container className={classes.container}>
        <Typography>All Right Reserved @2020 Mudasir</Typography>
        <div>
          <IconButton className={classes.btn} >
            <Link href={portfolioURL} color="inherit" target="_blank">
              <FaAward />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="facebook">
            <Link href={facebookURL} color="inherit" target="_blank">
              <FaFacebookF />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="github">
            <Link href={githubURL} color="inherit" target="_blank">
              <FaGithub />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="linkedin">
            <Link href={linkedInURL} color="inherit" target="_blank">
              <FaLinkedin />
            </Link>
          </IconButton>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
