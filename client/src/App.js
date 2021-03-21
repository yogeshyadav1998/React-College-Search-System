import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';

import './App.css';
import {getAllColleges} from './actions/college';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Dashboard from './components/dashboard/dashboard';


const App = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllColleges);
    })

    return (
        <div className="main_container">
            <Header></Header>
            <Dashboard></Dashboard>
            <Footer></Footer>
         </div>
    )
}

export default App;