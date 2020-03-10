import React from 'react';

class Timer extends React.Component{
    render(){
        return(
            <div id="timer">
                <h3 id="timer-countdown">COUNTDOWN</h3>
                <h2 id="hours">00</h2>
                <h2 id="min">00</h2>
                <h2 id="sec">00</h2>
                <div id="units">
                    <h4>{`{ hours }`}</h4>
                    <h4>{`{ min }`}</h4>
                    <h4>{`{ sec }`}</h4>
                </div>
            </div>
        )
    }
}

export default Timer;