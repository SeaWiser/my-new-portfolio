import React, { useEffect } from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Background from "./components/background/Background";
import './i18n/config';
import { t } from "i18next";


function App() {
  useEffect(() => {
    document.title = t('title')
  }, []);
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Background/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;