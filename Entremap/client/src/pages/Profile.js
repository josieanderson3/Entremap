import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';
import '../components/spinner.css';
import NavBar from '../components/NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProfileCard from '../components/ProfileCard';
import { isMobile } from '../utils/util.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    width: '100%',
    height: 'calc(100vh - 17vh)', //full page - header - footer
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export function LoggedIn() {
  const classes = useStyles();
  const [user, setUser] = useState('loading');

  useEffect(() => {
    // setUser(
    // {"fullName":"lemon iam","lastSurveyCompleted":"2022-10-09T11:52:22.717Z","picture":"https://lh3.googleusercontent.com/a-/ACNPEu_Lp4jczaGasKVnL0lQt_x0D2nI1wgP6o0uMrgz=s96-c","provider":"Google","accountCreated":"2022-09-28T00:00:00.000Z","completedSurveys":[{"date":"2022-10-09T11:52:22.713Z","ID":187}]}
    // )
    let getUser = '/api/user';
    fetch(getUser, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const render = () => {
    if (user === 'loading') {
      return (
        <div className="loader">
          <CircularProgress />
        </div>
      );
    } else if (user !== 'loading') {
      return (
        <ProfileCard
          lastSurveyCompleted={user.lastSurveyCompleted}
          fullName={user.fullName}
          picture={user.picture}
          provider={user.provider}
          accountCreated={user.accountCreated}
          completedSurveys={user.completedSurveys}
        />
      );
    }
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundImage: isMobile
            ? 'linear-gradient(#39AC7E, #39AC7E, #39AC7E)'
            : 'linear-gradient(#D9F2E8, white, white)',
          height: 'calc(100vh)',
        }}
      >
        <NavBar isLoggedIn={true} />
        {render()}
      </div>
      <Footer />
    </div>
  );
}

export default LoggedIn;
