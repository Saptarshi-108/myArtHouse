import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Picture from "./components/Picture";

import FullLoad from "./components/FullLoad";

const App = () => {
  return (
    <>
    <FullLoad  />
      <Header />
      <Picture />
      <Footer />
    </>
  );
};

export default App;
