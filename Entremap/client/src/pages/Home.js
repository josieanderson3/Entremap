import React from 'react';
import HomeGrid from '../components/HomeGrid.js';
import HomeGridMobile from '../components/HomeGrid-Mobile.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar';
import { isMobile } from '../utils/util';

const HomePage = isMobile ? HomeGridMobile : HomeGrid;

function Home(props) {
  return (
    <div
      style={{
        backgroundImage: isMobile
          ? 'linear-gradient(#3dae81,#3dae81,#3dae81)'
          : 'linear-gradient(#D9F2E8, white, white)',
      }}
    >
      <NavBar page="home" isLoggedIn={props.isLoggedIn} />
      <div style={{ maxWidth: isMobile ? '100vw' : '1584px', margin: 'auto' }}>
        <HomePage isLoggedIn={props.isLoggedIn} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
