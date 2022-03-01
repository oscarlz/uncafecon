import React, { useReducer } from 'react';
import HumansContext from './humansContext';
import HumansReducer from './humansReducer';
import {
    SET_LOADING, SET_MATCH, REMOVE_LOADING, EMPTY_EQUIPO
} from '../types';

const HumansState = props => {
    
    let horarios = ['Martes de 15:00 a 15:10', 
                    'Miércoles de 09:20 a 09:30',
                    'Miércoles de 15:00 a 15:10', 
                    'Jueves de 15:00 a 15:10',
                    'Viernes de 09:20 a 09:30'];

    const initialState = {
        loading: false,
        humansMatched: [],
        alreadyMatched: [],
        equipo: ['Diego', 'Mari', 'Joseph', 'Oscar', 'Maricho', 'Tomas']
    }

    const [state, dispatch] = useReducer(HumansReducer, initialState);

    //find a couple of cafem partners
    const findPartner = () => {

        //need to check if there are already matched persons. if there are, just take those items out of the original "equipo" array
        if(state.humansMatched.length > 0){
            state.equipo.splice(state.equipo.indexOf(state.humansMatched[0]), 1);
            state.equipo.splice(state.equipo.indexOf(state.humansMatched[1]), 1);

            // console.log(state.equipo.length + ' cambio: quitados: ' + state.humansMatched[0] + ' y ' + state.humansMatched[1]);
        }
        
        if(state.equipo.length > 0){

            setLoading();
            setTimeout(() => {  dispatch({ type: REMOVE_LOADING }) }, 2500);

            let human1 = state.equipo[Math.floor(Math.random() * state.equipo.length)];
            let human2 = state.equipo[Math.floor(Math.random() * state.equipo.length)];
            while(human1 === human2) human2 = state.equipo[Math.floor(Math.random() * state.equipo.length)];

            //ramdonly set the timestamp for this cafem meeting
            let dayAndTime = horarios[Math.floor(Math.random() * horarios.length)];

            dispatch({
                type: SET_MATCH,
                payload: [human1, human2, dayAndTime]
            })

        }else{
            dispatch({ type: EMPTY_EQUIPO });
        }
    }

    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    }

    return <HumansContext.Provider
        value={{
            loading: state.loading,
            humansMatched: state.humansMatched,
            alreadyMatched: state.alreadyMatched,
            equipo: state.equipo,
            findPartner
        }}
    >

        {props.children}
    </HumansContext.Provider>
}

export default HumansState;