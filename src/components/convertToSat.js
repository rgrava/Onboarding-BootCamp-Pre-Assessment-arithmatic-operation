import React from 'react';

//this will get user input and convert the entered bitcoin and convert to satoshi
// formfula: 1 Bitcoin Satoshi = 100 Million
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