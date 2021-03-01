import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import { CommerceContext } from "../contex/commerce-contex";

import logo from "../assets/commerce.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const { cart } = useContext(CommerceContext);
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" className={classes.link}>
            <img
              src={logo}
              alt="my shop"
              height="25px"
              className={classes.image}
            />
            RÓŻNOŚCI
          </Typography>
          <div className="classes.grow" />
          {location.pathname === "/" && (
            <div className="classes.button">
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={cart.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
