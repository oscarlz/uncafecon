import React, { useContext }  from 'react';
import CafemPairResults from './CafemPairResults';
import HumansContext from '../../context/humans/humansContext';


const CafemResults = () => {

    const humansContext = useContext(HumansContext)
    if(humansContext.equipo.length === 0){

       return(
           <div style={{ marginLeft: '250px'}}>
               {humansContext.alreadyMatched.map(
                   humans => (
                       <CafemPairResults key={humans[1]} humanPair={humans} />
                   )
               )}
           </div>
       )

    }else{
        return null;
    }
}

export default CafemResults;