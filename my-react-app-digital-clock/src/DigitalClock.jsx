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

    // this function will handle formatting the time
    function formatTime() {
        let hours = time.getHours(); // use let bc this variable will change
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        // if hours is greater than 12 its PM, otherwise its AM
        const meridiem = hours >= 12 ? "PM" : "AM"; 

        // formats to regular time vs military time
        // 13 % 12 = 1, 14 % 2 = 2, 12 % 12 = 0 (or 12)
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    // this function will handle any single digit number to have a leading zero
    function padZero(number) {
        // checks if the number is less than zero, if it is add the zero
        // then use string concatenation to add the number right after
        // example: 3 => 0 + 3 = 03
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock