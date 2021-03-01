import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import Product from "./product/Product";
import useStyle from "./styles";
import { CommerceContext } from "../contex/commerce-contex";

const Products = () => {
  const classes = useStyle();
  const { products } = useContext(CommerceContext);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
