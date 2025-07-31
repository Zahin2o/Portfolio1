import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import CricketBalls from './brain';

const Header = () => {
  return (
    <header className="custom-header position-relative text-white text-center py-5">
      <CricketBalls />
      <img
        src="/DSC01177.jpg"
        alt="Zahin's photo"
        className="profile-img mb-4"
      />
      <h1 className="display-4 fw-bold">Zahin Faisal</h1>
      <p className="lead fs-4">
        <Typewriter
          words={['MERN Stack Developer', 'Passionate Coder', 'Open Source Contributor']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </header>
  );
};

export default Header;
