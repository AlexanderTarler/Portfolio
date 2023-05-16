'use client'
import '../globals.css';
import './about.css';
import { useGlobalContext } from '../Context/store';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';



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
                <div id="about-text-box">
                    <h2>I&apos;m a fullstack developer with a passion for building innovative web applications with a great user experiences.</h2>
                    <h2>I have developed websites, applications and games, and I&apos;m excited to see what my next project will be.</h2>
                    <h2>I have a lot of experience using React, Next.js, MongoDb and Node.js as well as other tech stacks.</h2>
                    <h2>I am constantly looking to learn and grow as a developer.</h2>
                    <Link href={"/portfolio"}>
                        <h5>Check out my portfolio to see a few of my projects!</h5>
                    </Link>
                </div>
            </main>
        </>
    )
}