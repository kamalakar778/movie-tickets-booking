import React, { useContext, useState, useReducer } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <>
      <Header />
      <Movies />
      <Footer />
    </>
  );
};

export default Home;
