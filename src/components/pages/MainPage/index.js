import React from 'react';
import TopNavBar from '../../organisms/TopNavBar';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../themes/index";

const useStyles = makeStyles(() => ({
    root:{

    },
    navbar:{
        height:"100px",
    },
    typography:{
        marginLeft: "250px",
        marginTop: theme.spacing(4.375),
    },
    font:{
        fontWeight:"600",
    }
}));


function MainPage() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.navbar}>
              <TopNavBar />
          </Grid>
        </Grid>
      </div>
    );
  }
  export default MainPage;
  