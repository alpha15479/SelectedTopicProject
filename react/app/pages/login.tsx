import React from 'react';
// Modules
import { NextPage } from 'next/types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(
  (theme) => ({
    container: {
      padding: theme.spacing(3),
    },
  })
);

interface FormData {
  email: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container className={classes.container} maxWidth="xs">
     <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth 
                  {...register("email")} 
                  label="อีเมล์" 
                  size="small" 
                  variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  {...register("password")}
                  label="รหัสผ่าน"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth type="submit" variant="contained">
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginPage;
