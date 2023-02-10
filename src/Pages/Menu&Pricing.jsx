import React, { Fragment } from 'react';
import Offer from '../Component/Offer/Offer';
import PageHeader from '../Component/PageHeader/PageHeader';
import Footer from '../Component/Footer/Footer';
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';
import Products from '../Component/Products/Products';

export default function MenuAndPricing() {
  return (
    <Fragment>
      <TopBar/>
      <TopNav/>
      <PageHeader name="MENU & PRICING" pageName="Menu and Pricing"/>
      <Products />
      <Offer />
      <Footer />
    </Fragment>
  )
}
