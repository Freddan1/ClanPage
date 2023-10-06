import React from "react";
import './App.css'
import Banner from './components/Banner'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Members from './components/Members'
import Navbar from './components/Navbar'

function App() {
  const handleScroll = (sectionId) => {
    console.log("Scrolling to section:", sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
      console.log("Element found:", element);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
     <Navbar handleScroll={handleScroll}/>
     <Banner id="home"/>
     <Members id="members"/>
     <ContactUs id="contact"/>
     <Footer/>
    </>
  )
}

export default App
