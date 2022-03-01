import React, { useContext } from 'react';
import HumansContext from '../../context/humans/humansContext';

const Human1 = () => {
    let humansContext = useContext(HumansContext);
    let human1ImgName = null;
    
    if(humansContext.humansMatched){
        human1ImgName = humansContext.humansMatched[0];
    } 

    if(human1ImgName == null){
        return(
        <div>
            <div className="card text-center">
                Human #1

            </div>
        </div>
        )
    }else{

        return(
            <div>
                <div className="card text-center">
                    <img src={`/imgs/caras/${human1ImgName}.jpg`} alt="huma1 pic"></img>

                </div>
            </div>
        )
    }
}

export default Human1;