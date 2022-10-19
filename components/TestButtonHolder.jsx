import TestButton from "./TestButton.jsx";
import {useState} from 'react';

export default function TestButtonHolder(props) {
    let [currNum, setCurrNum] = useState(0);
    function increment() {
        setCurrNum(currNum + 'meow');
    }

    return (
        <div style={{"display": "flex", "flexDirection": 'column'}}>
            Current Number is: {currNum}
            <button type='button' onClick={increment}>Click to increment</button>
        </div>
    );
}