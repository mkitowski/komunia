import React from 'react';
import hiro from '../../lib/hiro.mkv';

const Hiro = () => {
    return (
        <video autoPlay muted loop>
            <source src={hiro} type="video/mp4" />
            Twoja przeglądarka ma gdzieś wyświetlanie czegokolwiek na tej stronie zmien na Chrome...
        </video>
    )
}

export default Hiro;

