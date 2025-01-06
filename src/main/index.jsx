import React, { useEffect, useState } from "react";
import "../App.css";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import Educations from "components/Education";
import About from "components/About";
import Skills from "components/Skills";
import Publication from "components/Publication";
import Loader from "components/Loader";
import Projects from "components/Projects";
import Experience from "components/Experience";

const Home = ({ currentTheme, themeToggler }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 1000);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Navbar currentTheme={currentTheme} themeToggler={themeToggler} />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Educations />
      <Projects />
      <Publication />
    </div>
  );
};

export default Home;
