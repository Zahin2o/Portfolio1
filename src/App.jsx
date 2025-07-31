import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import DarkModeToggle from './Components/DarkModeToggle';
import Contact from './Components/contact';
import SideAnimation from './Components/brain';
import MyNavbar from './Components/navbar';


function App () {
  return (
    <>
      <div className="animated-bg"></div> 
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <MyNavbar />
      <SideAnimation />
      <DarkModeToggle />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


export default App;




      


