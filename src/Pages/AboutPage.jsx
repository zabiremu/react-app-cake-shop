import React, { Fragment } from 'react';
import About from '../Component/About/About';
import Facts from '../Component/Facts/Facts';
import PageHeader from '../Component/PageHeader/PageHeader';
import Footer from '../Component/Footer/Footer';
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';

export default function AboutPage() {
  return (
    <Fragment>
      <TopBar/>
      <TopNav/>
      <PageHeader name="About Page" pageName="About Us"/>
      <About />
      <Facts />
      <Footer />
    </Fragment>
  )
}
