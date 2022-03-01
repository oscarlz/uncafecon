import React, { useContext } from 'react';
import HumansContext from '../../context/humans/humansContext';

const SearchPartner = () => {

    const humansContext = useContext(HumansContext);

    const handleForm = (e) => {
        e.preventDefault();
        
        humansContext.findPartner();
    }

    return(
        <div className="text-center lead" >
            <form onSubmit={handleForm}>
                <button type="submit" className="btn btn-light" style={{width:'400px', marginBottom:'20px'}}>
                <i className="fas fa-mug-hot fa-lg"></i> Buscar partners CAFEM

                </button>
            </form>
        </div>
    )
}

export default SearchPartner;