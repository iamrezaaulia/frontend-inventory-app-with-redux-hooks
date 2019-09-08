import React from 'react';
import { Image } from 'react-bootstrap';
import empty from '../assets/Empty.png';

const Blank = () => (
    <div className='text-center mx-auto'>
        <Image src={empty} style={{ width: '44rem' }} />
    </div>
);

export default Blank;