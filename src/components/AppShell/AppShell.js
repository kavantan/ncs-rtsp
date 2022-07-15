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
import { StyleSharp } from "@mui/icons-material";

export default function AppShell() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#959492" }} position="static">
        <Toolbar>
          <Box>
            <img
              className={styles.thingsOfAi}
              src={thingsofai}
              alt="NCS logo"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <div className={styles.title}>
              NCS A1 Digital Twin | Live Video Monitoring
            </div>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="medium"
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
              size="medium"
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
              size="medium"
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
              size="medium"
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
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NavLink to="/edgecam" className={styles.button}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Edge Cam
                </Typography>
              </NavLink>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <NavLink className={styles.home} to="/">
              <img className={styles.logo} src={logo} alt="NCS logo" />
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
