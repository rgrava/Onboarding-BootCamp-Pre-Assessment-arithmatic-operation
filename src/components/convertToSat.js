import React from 'react';
import ReactDOM from 'react-dom';

const Satoshi = (props) => {
    const { bits } = props;
    let sats = bits * 100000000
    return (
        <div>
            {bits} Bitcoin(s) = {sats} Satoshi(s)
        </div>
    )
}

export default Satoshi;