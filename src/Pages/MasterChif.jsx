import React, { Fragment } from 'react';
import PageHeader from '../Component/PageHeader/PageHeader';
import Footer from '../Component/Footer/Footer';
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';
import Team from '../Component/Team/Team';

export default function MasterChif() {
  return (
    <Fragment>
      <TopBar/>
      <TopNav/>
      <PageHeader name="MASTER CHEFS" pageName="Master Chefs"/>
      <Team />
      <Footer />
    </Fragment>
  )
}
