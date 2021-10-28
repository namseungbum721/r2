import React from 'react';
import useCounter from "../../hooks/useCounter";
import CountButtons from "./CountButtons";

const CountContainer = () => {

    const{num, change} = useCounter() //별도로 다 빼준 것이다. 코드양이 줄었다고 생각하면 오산!!

    return (
        <div>
            <h1>{num}</h1>
            <CountButtons change={change}></CountButtons>
        </div>
    );
};

export default CountContainer;