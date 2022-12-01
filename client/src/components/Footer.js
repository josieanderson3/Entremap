import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LinkedInIcon from '../resources/linkedin.svg';
import twitterIcon from '../resources/twitter.svg';
import facebookIcon from '../resources/facebook.svg';
import { isMobile } from '../utils/util';

const Icons = [
  { icon: LinkedInIcon, url: 'https://www.linkedin.com/company/entremap/' },
  { icon: twitterIcon, url: 'https://twitter.com/entremap1' },
  { icon: facebookIcon, url: 'https://twitter.com/entremap1' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  alignItemsAndJustifyContent: {
    width: '100%',
    height: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  icons: {},
  item: {
    padding: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemicon: {
    width: 32,
    height: 32,
    background: '#fff',
    padding: 2,
    cursor: 'pointer',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D96230',
    },
  },
});

export default function NavBar() {
  const classes = useStyles();

  const handleIconClick = (icon) => {
    if (icon.url) {
      window.open(icon.url);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box className={classes.alignItemsAndJustifyContent} spacing={4}>
              <Grid item className={classes.typogrid} xs={4}>
                <Typography variant="body2" align="left">
                  © Copyright 2021
                </Typography>
              </Grid>
              <Grid
                container
                className={classes.icons}
                xs={isMobile ? 3 : 4}
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                {Icons.map((icon, index) => (
                  <Grid
                    item
                    xs={isMobile ? 6 : 2}
                    className={classes.item}
                    key={index}
                  >
                    <img
                      src={icon.icon}
                      className={classes.itemicon}
                      onClick={() => handleIconClick(icon)}
                      alt=""
                    />
                  </Grid>
                ))}
              </Grid>

              <Grid item className={classes.typogrid} xs={isMobile ? 5 : 4}>
                <Typography variant="body2" align="right">
                  Contact: entremapco@gmail.com
                </Typography>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
