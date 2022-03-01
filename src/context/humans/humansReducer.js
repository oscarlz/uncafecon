import {
    SET_LOADING,
    SET_MATCH,
    REMOVE_LOADING,
    EMPTY_EQUIPO
} from '../types';

export default (state, action) => {

    switch (action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case SET_MATCH:
            return {
                ...state,
                humansMatched: action.payload,
                alreadyMatched: [...state.alreadyMatched, action.payload],
            }
        
        case REMOVE_LOADING:
            return{
                ...state,
                loading: false
            }

        case EMPTY_EQUIPO:
            return {
                equipo: [],
                ...state
            }

        default:
            return state;
    }
}