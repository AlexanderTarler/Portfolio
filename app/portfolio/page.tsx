'use client'
import '../globals.css';
import './portfolio.css';
import Link from 'next/link';

export default function Portfolio() {

    return (
        <>

            <main className='portfolio'>

                <h1 className='project_type'>JavaScript</h1>
                <Link className='project_item' href={'https://cv-creator-nine.vercel.app/'}>
                    Cv Creator
                </Link>
                <Link className='project_item' href={'https://tarler-portfolio.vercel.app/todo-list/'}>
                    Todo-list
                </Link>
                <h1 className='project_type'>Unity / C#</h1>
                <Link className='project_item' href={'https://play.unity.com/mg/other/foximus-rex-web'}>
                    Foximus Rex
                </Link>
            </main>
        </>
    )
}