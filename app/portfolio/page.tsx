'use client'
import '../globals.css';
import './portfolio.css';
import Link from 'next/link';
import { useGlobalContext } from '../Context/store';

export default function Portfolio() {
    const { time, setTime } = useGlobalContext();

    return (
        <>

            <main className='portfolio'>

                <h1 className='project_type'>JavaScript</h1>
                <Link className='project_item' href={'https://cv-creator-nine.vercel.app/'}>
                    Cv Creator
                </Link>
                <h1 className='project_type'>Unity / C#</h1>
                <Link className='project_item' href={'https://play.unity.com/mg/other/foximus-rex-web'}>
                    Foximus Rex
                </Link>
            </main>
        </>
    )
}