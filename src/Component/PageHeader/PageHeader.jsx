import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
export default function PageHeader(props) {
return (
<Fragment>
    {/*-- Page Header Start --*/}
    <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
            <div className="col-12 text-center">
                <h1 className="display-4 text-uppercase text-white">{props.name}</h1>
                <NavLink to="/">Home</NavLink>
                <i className="far fa-square text-primary px-2"></i>
                <a href='#'>{props.pageName}</a>
            </div>
        </div>
    </div>
    {/*-- Page Header End --*/}
</Fragment>
)
}
