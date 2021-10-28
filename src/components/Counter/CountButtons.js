import React from 'react';
import useCounter from "../../hooks/useCounter";

const CountButtons = () => {

    const {change} = useCounter()

    return (
        <div>
            <button onClick={()=>change(1)}>INC</button>
            <button onClick={()=>change(-1)}>DEC</button>
        </div>
    );
};

export default CountButtons;