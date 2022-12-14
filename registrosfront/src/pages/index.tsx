import '../styles.css'
import * as React from "react"
import type { HeadFC } from "gatsby"
import { TextField, Button, Grid, Container, Card, CardContent, Typography, CardActions } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useFormik, Form } from 'formik';
import { http } from '../utils/http';

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        console.log(process.env)
        const req = await http.post('/auth/login', values)
        console.log(req.data)
      } catch (error) {
        console.error(error)
      }
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardContent>
              <Typography sx={{ marginBottom: '10px' }} variant="h5" component="div">
                Acceso a la web
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="email" onChange={formik.handleChange} value={formik.values.email} fullWidth label="Correo electrónico" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="password" onChange={formik.handleChange} value={formik.values.password} fullWidth label="Contraseña" type='password' />
                </Grid>
                <Grid sx={{ display: 'flex' }} item xs={12}>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button sx={{ marginLeft: 'auto' }} disableElevation type="submit" variant="contained">Acceder</Button>
            </CardActions>
          </Card>
        </form>
      </Container>
    </>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>
