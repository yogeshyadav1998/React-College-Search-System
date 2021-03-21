import React from 'react';

import {useSelector} from 'react-redux';

const Colleges = () =>{
    const colleges = useSelector((state)=> state.College)
    console.log(colleges);
    return(
        <College/>
    )
}