const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_ALL':
                return action.payload;
        case 'FETCH_WITH_ID':
                return state;
        case 'FETCH_WITH_NAME':
                return state;
        case 'FETCH_SIMILAR':
                return state;
        default:
            break;
    }
}

export default reducer;