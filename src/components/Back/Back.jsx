import React from 'react';
import { Link } from 'react-router-dom';

function Back({ href, styles }) {
    return (
        <Link to={href} className={styles}>
            <p className='text-lg text-white font-bold underline'>VOLTAR</p>
        </Link >
    )
}

export default Back;