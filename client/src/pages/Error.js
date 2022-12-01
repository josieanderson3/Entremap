import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar';
import { isMobile } from '../utils/util';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const errorType = {
  400: {
    title: 'Bad Request',
    text: 'There was an error loading this page.Please refresh the page or return to the homepage.',
  },
  401: {
    title: 'Not authorised',
    text: 'Sorry,you must be signed in to view this page. ',
  },
  403: {
    title: 'Forbidden',
    text: 'Access to this resource is forbidden. ',
  },
  404: {
    title: 'Page not found',
    text: `Sorry,the page you're looking for cannot be found. The page you're looking for doesn't exist,may have moved,or is temporarily unavailable. `,
  },
};

export default function ErroPage(props) {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const errCode = location.search.replace('?errCode=', '') || 404;
  const { title, text } = errorType[errCode] || {};

  const backToHome = () => {
    history.push('/');
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: isMobile
          ? 'linear-gradient(#3dae81,#3dae81,#3dae81)'
          : 'linear-gradient(#D9F2E8, white, white)',
        height: '100vh',
      }}
    >
      <NavBar page="home" isLoggedIn={props.isLoggedIn} />
      <Box
        mx="auto"
        width="90%"
        height="calc(100vh - 70px)"
        style={{ paddingTop: '180px', boxSizing: 'border-box' }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignContent="center"
          direction="column"
        >
          <Typography variant="h3" align="center" style={{ color: '#D96230' }}>
            {errCode}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ color: isMobile ? '#fff' : '#000', marginTop: 12 }}
          >
            {title}
          </Typography>
          <Card
            style={{
              margin: 'auto',
              width: isMobile ? '80vw' : '500px',
              marginTop: '32px',
              padding: '32px',
              backgroundColor: isMobile ? '#fff' : '#fff',
              // border: '1px solid #fff',
            }}
          >
            <Grid direction="column">
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="p" align="left" style={{ color: '#000' }}>
                  {text}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                style={{ marginTop: 24, display: 'flex' }}
                justifyContent="center"
                alignContent="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={backToHome}
                >
                  Return to the homepage.
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}
