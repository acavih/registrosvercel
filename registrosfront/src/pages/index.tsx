import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import type { HeadFC } from "gatsby";
import * as React from "react";
import { useDispatch } from "react-redux";
import { GuestLayout } from "../components/Layouts/Guest";
import { login } from "../store/features/AuthSlice";
import "../styles.css";
import { http } from "../utils/http";

export default function LoginPage() {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(process.env);
        const req = await http.post("/auth/login", values);
        dispatch(login(req.data))
      } catch (error) {
        console.error(error);
      }
    }
  })

  return (
    <GuestLayout>
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardContent>
              <Typography
                sx={{ marginBottom: "10px" }}
                variant="h5"
                component="div"
              >
                Acceso a la web
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    fullWidth
                    label="Correo electrónico"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    fullWidth
                    label="Contraseña"
                    type="password"
                  />
                </Grid>
                <Grid sx={{ display: "flex" }} item xs={12}></Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                sx={{ marginLeft: "auto" }}
                disableElevation
                type="submit"
                variant="contained"
              >
                Acceder
              </Button>
            </CardActions>
          </Card>
        </form>
    </GuestLayout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
