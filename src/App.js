import React, { Fragment } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <Fragment>
       <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
