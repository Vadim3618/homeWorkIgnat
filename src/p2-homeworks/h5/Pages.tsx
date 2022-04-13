import React from 'react'
import Junior from "../h5/pages/Junior";
import JuniorPlus from "../h5/pages/JuniorPlus";
import PreJunior from "../h5/pages/PreJunior";
import Error404 from "../h5/pages/Error404";
import {Route, Routes, Navigate} from "react-router-dom";


export const PATH = {
    PRE_JUNIOR: '/PreJunior',
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/JuniorPlus',
}

function Pages() {
    return (
        <div>
            <Routes>

                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
