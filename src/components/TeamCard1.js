import React from 'react';
import snap1 from '../img/snap1.png';

export const TeamCard1 = () => {
    return(
        <div>
            <img 
                src={snap1} alt="Cool Guy 1"
                width="250"
                height="250"
             />
             <h3>Crym</h3>
            <p>Cool Product Owner</p>
        </div>
    )
}