import React, { Fragment } from 'react';
import Offer from '../Component/Offer/Offer';
import PageHeader from '../Component/PageHeader/PageHeader';
import Footer from '../Component/Footer/Footer';
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';
import Review from '../Component/Review/Review';
import Contact from '../Component/Contact/Contact';

export default function ContactPage() {
  return (
    <Fragment>
      <TopBar/>
      <TopNav/>
      <PageHeader name="CONTACT US" pageName="Contact"/>
      <Contact />
      <Footer />
    </Fragment>
  )
}
