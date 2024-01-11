import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";

export const Doroute = () =>{
    return(
<BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
    </Routes>
</BrowserRouter>
    )

}

