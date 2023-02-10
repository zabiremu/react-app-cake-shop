import React, { Fragment } from "react";
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';
import Hero from '../Component/Hero/Hero';
import Video from '../Component/Video/Video';
import About from '../Component/About/About';
import Facts from '../Component/Facts/Facts';
import Products from '../Component/Products/Products';
import Services from '../Component/Services/Services';
import Team from '../Component/Team/Team';
import Offer from '../Component/Offer/Offer';
import Review from '../Component/Review/Review';
import Footer from '../Component/Footer/Footer';
export default function HomePage() {
  return (
    <Fragment>
      <TopBar />
      <TopNav />
      <Hero />
      <Video />
      <About />
      <Facts />
      <Products />
      <Services />
      <Team />
      <Offer />
      <Review />
      <Footer />
    </Fragment>
  );
}
