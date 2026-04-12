import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div
            className='flex justify-center items-center h-screen'>
            <HashLoader color='#632EE3' />
        </div>
    );
};

export default Loading;