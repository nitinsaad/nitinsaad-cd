export const buildingReducers = (state=[], action) =>{       
    switch(action.type){
        case "GET_BUILDINGS" :
            return {...state, data:action.payload.data};
        case "GET_FILTERS" :
            return {...state, filters:action.payload};
        default:
            return state;
    }
}