import React, { Fragment } from 'react';
import PageHeader from '../Component/PageHeader/PageHeader';
import Footer from '../Component/Footer/Footer';
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';
import Services from '../Component/Services/Services';

export default function ServicePage() {
  return (
    <Fragment>
      <TopBar/>
      <TopNav/>
      <PageHeader name="SERVICES" pageName="Services"/>
      <Services />
      <Footer />
    </Fragment>
  )
}
