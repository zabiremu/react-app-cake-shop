import React, { Fragment } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from '../Pages/AboutPage';
import HomePage from '../Pages/HomePage';
import MenuAndPricing from '../Pages/Menu&Pricing';
import MasterChif from '../Pages/MasterChif';
import ServicePage from '../Pages/ServicePage';
import ReviewPage from '../Pages/ReviewPage';
import ContactPage from '../Pages/ContactPage';
export default function AppRouter() {
  return (
    <Fragment>
       <Routes>
            <Route exact  path='/' element={<HomePage/>} />
            <Route exact  path='/about' element={<AboutPage/>} />
            <Route exact  path='/products' element={<MenuAndPricing/>} />
            <Route exact  path='/team' element={<MasterChif/>} />
            <Route exact  path='/team' element={<MasterChif/>} />
            <Route exact  path='/services' element={<ServicePage/>} />
            <Route exact  path='/review' element={<ReviewPage/>} />
            <Route exact  path='/contact' element={<ContactPage/>} />
       </Routes>
    </Fragment>
  )
}
