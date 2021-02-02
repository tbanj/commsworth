import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import BodyHome from '../Body/BodyHome';
import HeaderHome from '../header/HeaderHome';
import Footer from '../footer/Footer';


const Home = () => (
  <Fragment>
    {/* indexing */}
    <MetaTags>
      <title>TRUCSR TRUCONTACT</title>
      <meta name="description" content="At TRUCSR, We are in the business of sustainability" />
      <meta property="og:title" content="TRUCSR" />
      <meta property="keywords" content="charitable, volunteering" />
    </MetaTags>

    <HeaderHome />
    <BodyHome />
    {/* <BodyHome />
     */}
    <Footer />


  </Fragment>
);

export default Home;
