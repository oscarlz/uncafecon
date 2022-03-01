import React, { useContext } from 'react';
import HumansContext from '../../context/humans/humansContext';

const CafemMeetingDate = () => {

    const humansContext = useContext(HumansContext);
    const { humansMatched, loading, equipo } = humansContext;

    if(equipo.length > 0 && humansMatched.length !== 0 && loading === false){
        return(
            <div className="text-center">
            <span className="lead" style={{ fontWeight: 'bold'}}>CAFEM Cargado: </span>
            <span className="lead text-center">{`${humansMatched[0]} y ${humansMatched[1]} `}</span>
                <div><span style={{ fontWeight:'bold'}}>Horario sugerido: </span><span>{`${humansMatched[2]}`}</span></div>
            </div>
            
        )
    }else{
        return null;
    }
}

export default CafemMeetingDate;