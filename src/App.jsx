import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import Intro from "./components/Intro";
// import FullLoad from "./components/FullLoad";

const App = () => {
  return (
    <>
    {/* <FullLoad/> */}
      <Header />
      <Intro />
      <Picture />
      <Footer />
    </>
  );
};

export default App;
