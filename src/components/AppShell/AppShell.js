import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import logo from "../../assets/ncslogo.png";
import thingsofai from "../../assets/thingsofai.png";
import styles from "./AppShell.module.css";

export default function AppShell() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#959492" }} position="static">
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
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ flexGrow: 1 }}>
            <img src={thingsofai} alt="NCS logo" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NavLink to="/driveway" className={styles.button}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Driveway
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
              <NavLink to="/ecogarden" className={styles.button}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Eco-Garden
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
              <NavLink to="/reception" className={styles.button}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Reception
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
              <NavLink to="/bistro" className={styles.button}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Bistro
                </Typography>
              </NavLink>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
