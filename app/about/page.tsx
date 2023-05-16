'use client'
import '../globals.css';
import './about.css';
import { useGlobalContext } from '../Context/store';
import { useEffect, useRef, useState } from 'react';



export default function Home() {
    const { time, setTime } = useGlobalContext();
    const [query, setQuery] = useState('');
    const [answer, setAnswer] = useState('');
    const [visible, setVisible] = useState(true);
    const queryRef = useRef<any>();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('terminal_input')?.focus();

        }, 8000);
        setAnswer('');
    }, [])

    const handleChange = (event: any) => {
        setQuery((event.target.value).toLowerCase());
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            if (query === 'keywords') {
                queryRef.current!.value = '';
                setAnswer('Skills, Hobbies');
                setQuery('');
            } else if (query === 'skills') {
                queryRef.current!.value = '';
                setAnswer('React, NextJS, Node');
                setQuery('');
            } else if (query === 'hobbies') {
                queryRef.current!.value = '';
                setAnswer('TTRPGs, coding, fitness, baking');
                setQuery('');

            } else if (query === 'Contact Info') {
                queryRef.current!.value = '';
                setAnswer(`<Link href={'/contact'}>Contact</Link>}`);
                setQuery('');

            } else if (query === '') {
                setAnswer('Please enter a keyword');
                setQuery('');
            } else {
                queryRef.current!.value = '';
                setAnswer('No such keyword found');
                setQuery('');

            }
            document.getElementById('terminal_input')?.focus();

        }
    };

    const handleClick = () => {
        setVisible(current => !current);
        document.getElementById('terminal_input')?.focus();

    }

    return (
        <>
            <main className='about'>
                <div className='fakeMenu'>
                    <div className="fakeButtons fakeClose"></div>
                    <div className="fakeButtons fakeMinimize"></div>
                    <div className="fakeButtons fakeZoom"></div>
                </div>
                <div className="fakeScreen">
                    <p className="line1">Hi there!<span className="cursor1">_</span></p>
                    <p className="line2">I&apos;m Alex, a fullstack developer with a passion for coding.<span className="cursor2">_</span></p>
                    <p className="line3">Enter 	&quot;keywords&quot; below to find out what else you can type!<span className="cursor3">_</span></p>
                    <div className={visible ? 'invisible' : 'visible'}>
                        Skills
                        Hobbies
                        {/* Contact Info */}
                    </div>
                    <input ref={queryRef} id='terminal_input' type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
                    <div className="terminal_answer">{answer}</div>
                </div>
            </main>
        </>
    )
}