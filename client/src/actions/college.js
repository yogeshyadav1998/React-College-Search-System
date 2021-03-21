import * as api from '../api';

export const getAllColleges = () => async (dispatch) =>{
    try{
        console.log("in action");
        const response = await api.fetchColleges();
        console.log(response.data)
        dispatch({
            type: 'FETCH_ALL',
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
    }

}