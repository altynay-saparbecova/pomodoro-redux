import React, { useState } from 'react'
import './Main.css'
import TimerLayout from '../TimerLayout/TimerLayout'
import Settings from '../Settings/Settings'
import Info from '../Info/Info'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrease_time, start_time, short_Break, switchSession, long_Break } from '../../store/action/action'
import { useEffect } from 'react'
import AudioPlayer from 'react-audio-element';
import Swal from 'sweetalert2'
// music
import sound from "../../ride.wav"
import StartStop from '../StartStop/StartStop'
// import pianino from '../../audio/pianino.mp3'
function Main() {
    // state
    const button = useSelector(state => state.button);
    const interval = useSelector(state => state.interval);
    const timerRunning = useSelector(state => state.timerRunning);
    const minuteSecond = useSelector(state => state.minuteSecond);
    const longBreak = useSelector(state => state.longBreak);
    const shortBreak = useSelector(state => state.shortBreak);
    const sessionLength = useSelector(state => state.sessionLength);
    const countFromStore = useSelector((state) => state.count);
    const minutes = Math.floor(minuteSecond / 60);
    const [minute, setMinute] = useState(minutes);
    const dispatch = useDispatch()
    const audio = new Audio(sound);
    const ses = () => {
        Swal.fire('Time to Work!')
        audio.play()
    }
    const res = () => {
        Swal.fire('Time to Rest!')
    }
    useEffect(() => {
        let count = null;
        if (timerRunning && minuteSecond > 0) {
            count = setInterval(() => {
                dispatch(decrease_time())
            }, 100)
        } else if (timerRunning && minuteSecond === 0) {
            count = setInterval(() => {
                dispatch(decrease_time())
            }, 100)
            audio.play()
            if (interval === 'Session') {
                res()
                dispatch(short_Break());
            }
            else if (interval === "Break") {
                ses()
                dispatch(switchSession());
            }
        }
        else {
            clearInterval(count)
        }
        return () => clearInterval(count)
    }, [audio, timerRunning, minuteSecond, interval, switchSession, decrease_time, short_Break, long_Break])
    let obj = {
        shortBreak: shortBreak,
        longBreak: longBreak,
        minuteSecond: minute,
        sessionLength: minute,
        countFromStore: countFromStore,
    };
    return (
        <>
            {/* <div>
                <AudioPlayer src={pianino} className="music"
                    overrideStyles={true}
                    classNames={
                        {
                            controlButton: "custom-control",
                            playPause: "custom-play-pause",
                            timeText: "custom-time-text",
                            sliderTrack: "custom-slider-track"
                        }
                    }
                />
            </div> */}
            <div className="container">
                <div className="header">
                    <div>
                        <span><Info /> </span>
                        <span><Settings
                            minuteSecond={minuteSecond}
                            longBreak={longBreak}
                            shortBreak={shortBreak}
                            countFromStore={countFromStore}
                            minute={minute}
                            minutes={minutes}
                            setMinute={setMinute}
                            obj={obj}
                        /></span>
                    </div>
                </div>
                <div>
                    <TimerLayout minuteSecond={minuteSecond} />
                </div>
                {!button ? (
                    <button className="button" onClick={() => {
                        dispatch(start_time())
                    }}>start</button>
                ) : (
                    <StartStop obj={obj} />
                )}
            </div>
        </>
    )
}
export default Main