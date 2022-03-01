import React, { useContext } from 'react';
import HumansContext from '../../context/humans/humansContext';

const Human2 = () => {

    let humansContext = useContext(HumansContext);
    let human2ImgName = null;

    if(humansContext.humansMatched){
        human2ImgName = humansContext.humansMatched[1];
    } 

    if(human2ImgName == null){
        return(
        <div>
            <div className="card text-center">
                Human #2

            </div>
        </div>
        )
    }else{

        return(
            <div>
                <div className="card text-center">
                    <img src={`/imgs/caras/${human2ImgName}.jpg`} alt="humano2 pic"></img>

                </div>
            </div>
        )
    }
}

export default Human2;