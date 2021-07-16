import React from 'react';

const h2Style = {
    color: "#c90e0e"
}

const Intro = props => (
    <h2 style={h2Style}>
        {props.message}
    </h2>
)


export default Intro;