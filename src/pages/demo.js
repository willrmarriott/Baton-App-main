import DemoForm from '../components/DemoForm';
import React from 'react';
import Footer from '../components/Footer';
import ScrollToTop from "../components/shared/ScrollToTop";

const Demo = () => {
  return (
    <>
      <ScrollToTop/>
      <DemoForm />
      <Footer />
    </>
  );
};

export default Demo;
