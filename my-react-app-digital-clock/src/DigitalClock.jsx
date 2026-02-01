import React, {useState, useEffect} from "react";

function DigitalClock() {
    // create state variable of time with setter
    // initial state will be the current date/time
    const [time, setTime] = useState(new Date());

    // do this code only when we mount the component, not every time it renders
    useEffect(() => {
        // do some code every 1000ms, or every 1 second
        const intervalId = setInterval(() => {
            // update the state of time every second with the new current date/time
            setTime(new Date());
        }, 1000);

        // clean up function when this component unmounts
        return () => {
            // if we unmount, this stops it from running continously
            clearInterval(intervalId);
        }
    }, []);

    return(
        <div className="clock-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
    );
}

export default DigitalClock