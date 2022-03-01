import React from 'react';
import PropTypes from 'prop-types';

const CafemPairResults = (humanPair) => {
    console.log(humanPair);
    return (
        <div style={{ marginTop: '10px'}}>
            <img src={`/imgs/caras/${humanPair.humanPair[0]}.jpg`} alt="huma1 pic" style={{ width:'50px'}}></img>
        {`${humanPair.humanPair[0]}`} con &nbsp;  
            <img src={`/imgs/caras/${humanPair.humanPair[1]}.jpg`} alt="huma2 pic" style={{ width:'50px'}}></img>
        {`${humanPair.humanPair[1]}`} el día {`${humanPair.humanPair[2]}`}
        </div>
    )
}

CafemPairResults.propTypes = {
    humanPair: PropTypes.array.isRequired
}

export default CafemPairResults