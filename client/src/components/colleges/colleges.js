import React from 'react';

import {useSelector} from 'react-redux';

const Colleges = () =>{
    const colleges = useSelector((state)=> state.all_colleges)
    console.log(colleges);
    return(
       <div>
           hii
       </div>
    )
}

export default  Colleges;