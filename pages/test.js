import { useState } from "react";
import { 
    Box,
    Heading,
    Select,
    Text
} from '@chakra-ui/react'

export default function Test() {
    let [currFn, setCurrFn] = useState(() => () => {});
    let [inputs, setInputs] = useState();

    return (
        <div>
            <Select placeholder='Select test function'>
                <option value='option1'>Test fn 1</option>
                <option value='option2'>Test fn 2</option>
            </Select>
            <label>
                Function input
                <input type="text"></input>
            </label>
            <div>
                Function output: {currFn(inputs)}
            </div>
        </div>
    );
}