import { Container, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import type { HeadFC } from "gatsby";
import * as React from "react";
import '../../styles.css';

export const GuestLayout: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Página de acceso
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '20px' }}>
        {children}
      </Container>
    </>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>
