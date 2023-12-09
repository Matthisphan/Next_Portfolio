import React, { ReactElement } from "react";

import { AppBar, Toolbar, Typography, Container } from "@mui/material";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Portefolio</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
