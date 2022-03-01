import React, { useContext } from 'react';
import Human1 from './Human1';
import Human2 from './Human2';
import CafemResults from './CafemResults';
import PartnerLoading from '../layout/PartnerLoading';
import HumansContext from '../../context/humans/humansContext';

const Humans = () => {
    
    const humansContext = useContext(HumansContext);

    if(humansContext.loading)
        return <PartnerLoading />
    else{

        if(humansContext.equipo.length > 0){
            return(
                <div style={humansStyle}>
                    <Human1 />
                    <Human2 /> 
                        
                </div>
            );
        }else{
            return (<CafemResults />) 
        }
    }
}

const humansStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
}

export default Humans;