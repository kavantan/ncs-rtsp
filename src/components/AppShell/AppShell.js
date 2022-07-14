import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import logo from "../../assets/ncslogo.png";
import styles from "./AppShell.module.css";

export default function AppShell() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <NavLink className={styles.home} to="/">
              <img src={logo} alt="NCS logo" />{" "}
            </NavLink>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavLink to="/location1" className={styles.button}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Location1
              </Typography>
            </NavLink>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavLink to="/location2" className={styles.button}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Location2
              </Typography>
            </NavLink>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavLink to="/location3" className={styles.button}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Location3
              </Typography>
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
