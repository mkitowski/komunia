import React from 'react';
import hiro from '../../lib/hiro.mkv';

const Hiro = () => {
    return (
        <video autoPlay muted loop>
            <source src={hiro} type="video/mp4" />
        </video>
    )
}

export default Hiro;
            
