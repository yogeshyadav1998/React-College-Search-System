import * as api from '../api';

export const getAllColleges = () => async (dispatch) =>{
    try{
        const response = await api.fetchColleges();
        dispatch({
            type: 'FETCH_ALL',
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
    }

}