import React, { useContext } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./cartItem/CartItem";
import useStyles from "./styles";
import { CommerceContext } from "../contex/commerce-contex";

const Cart = () => {
  const { cart } = useContext(CommerceContext);
  const classes = useStyles();
  console.log("log z komponent cart", cart);

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        Twój koszyk jest pusty.{" "}
        <Link to="/" className={classes.link}>
          Zacznij dodawać przedmioty!
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Suma: {cart.subtotal.formatted} zł
          </Typography>
        </div>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Opróżnij koszyk{" "}
          </Button>
          <Button
            className={classes.checkout}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            component={Link}
            to="/checkout"
          >
            Do kasy
          </Button>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Przygotowuję koszyk...";

  return (
    <Container>
      <div className="classes.toolbar" />
      <Typography className={classes.title} gutterBottom variant="h2">
        Twój koszyk
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
