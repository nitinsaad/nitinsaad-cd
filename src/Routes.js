import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home, Buildings, BuildingDetails, Location, Apartment} from './views'

const RoutesPath = () => {        
    if(window.location.pathname === "/")
    {
        window.location.pathname ="/lux" 
    }
    return (        
        <BrowserRouter basename={"lux"}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/buildings" element={<Buildings/>}/>
                <Route exact path="/buiding/:id/details" element={<BuildingDetails/>}/>
                <Route exact path="/location" element={<Location/>}/>
                <Route exact path="/apartments" element={<Apartment/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath
