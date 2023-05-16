'use client'
import './globals.css';

import { useGlobalContext } from './Context/store';



export default function Welcome() {
    const { time } = useGlobalContext();

    if (time >= 5 && time < 9) {
        return (<>
            <h1 id='dawn_welcome'>
                <div className='dawn_text'>Where</div><div id='dawn_creativity'>creativity</div> <div className='dawn_text'>meets</div> <div id='dawn_functionality'>functionality</div>
            </h1>
        </>)
    } else if (time >= 9 && time < 19) {
        return (<>
            <h1 id='day_welcome'>
                <div className='day_text'>Where</div><div id='day_creativity'>creativity</div> <div className='day_text'>meets</div> <div id='day_functionality'>functionality</div>
            </h1>

        </>)
    } else if (time >= 19 && time <= 23) {
        return (<>
            <h1 id='dusk_welcome'>
                <div className='dusk_text'>Where</div><div id='dusk_creativity'>creativity</div> <div className='dusk_text'>meets</div> <div id='dusk_functionality'>functionality</div>
            </h1></>)
    } else {
        return (<>
            <h1 id='night_welcome'>
                <div className='night_text'>Where</div><div id='night_creativity'>creativity</div> <div className='night_text'>meets</div> <div id='night_functionality'>functionality</div>
            </h1></>)

    }
}