import React from 'react';
import loadering from '../../assets/loader.gif';

const Loader = props => (
    <div>
        <img src={loadering} alt="loader gif" style={{ width: 75, marginTop: 10 }}/>
    </div>
);


export default Loader;