import React from 'react';

//this will get user input and convert the entered satoshi and convert to bitcoin
// formfula: 100 Million Satoshi = 1 Bitcoin
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