import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement";
import './css.css'

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter +1)
    // }

    const increment  = useCallback(
        (val) => {
            setCounter(c => c + val)
        },
        [setCounter],
    )

    // useEffect(() => {    }, [increment]) 

    return (
        <div>
            <h1>useCallback Hook</h1>
            <h3>Counter: {counter}</h3>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallbackHook
