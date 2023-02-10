import React, { Fragment } from 'react';
import PageHeader from '../Component/PageHeader/PageHeader';
import Footer from '../Component/Footer/Footer';
import TopBar from '../Component/TopBar/TopBar';
import TopNav from '../Component/TopNav/TopNav';
import Review from '../Component/Review/Review';

export default function ReviewPage() {
  return (
    <Fragment>
      <TopBar/>
      <TopNav/>
      <PageHeader name="TESTIMONIAL" pageName="Testimonial"/>
      <Review />
      <Footer />
    </Fragment>
  )
}
