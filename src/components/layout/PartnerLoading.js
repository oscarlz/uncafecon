import React from 'react';
import caras from './caras-asech.gif';

const PartnerLoading = () => {

    return(
        <div className="text-center">
            <span className="lead">Cargando cafem, espera... <i className="fas fa-yin-yang fa-spin"></i></span>
            <img src={caras} alt="Cargando partner" style={{ width:'350px', margin:'auto', display:'block' }} />
        </div>
    )
}

export default PartnerLoading;