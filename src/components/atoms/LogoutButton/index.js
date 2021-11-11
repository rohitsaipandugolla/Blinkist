import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '../Button';
import {  makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    color:"#03314b",
    backgroundColor:"#2ce080"
  },
}));

const LoginButton = () => {
  const classes=useStyles();
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button variant="outlined" title="Log Out" className={classes.root} onClick={() => logout()} />
    )
  );
};

export default LoginButton;
