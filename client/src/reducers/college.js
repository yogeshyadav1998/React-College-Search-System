const initialState = {
    all_colleges: [],
    searched_Id: null,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            console.log("in reducer");
                return {
                    ...state,
                    all_colleges: action.payload
                };
        case 'FETCH_WITH_ID':
                return state;
        case 'FETCH_WITH_NAME':
                return state;
        case 'FETCH_SIMILAR':
                return state;
        default:
            return state;
    }
}

export default reducer;