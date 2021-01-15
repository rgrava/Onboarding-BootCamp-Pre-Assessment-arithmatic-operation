import React from 'react';
import ReactDOM from 'react-dom';

const Bitcoin = (props) => {
    const { sats } = props;
    let bits = sats/100000000
    return (
        <div>
            {sats} Satoshi(s) = {bits} Bitcoin(s)
        </div>
    )
}

export default Bitcoin;