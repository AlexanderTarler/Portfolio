'use client'
import '../globals.css';
import './about.css';
import Link from 'next/link';



export default function About() {

    return (
        <>
            <main className='about'>
                <div id="about-text-box">
                    <h2>I&apos;m a fullstack developer with a passion for building innovative web applications with a great user experience.</h2>
                    <br />
                    <h2>I have developed websites, applications and games, and I&apos;m excited to see what my next project will be!</h2>
                    <br />
                    <h2>I have a lot of experience using React, Next.js, MongoDB and Node.js as well as other tech stacks and I am constantly looking to learn and grow as a developer.</h2>
                    <br />
                    <h2>I am constantly looking to learn and grow as a developer.</h2>
                    <Link href={"/portfolio"}>
                        <h5>Check out my portfolio to see a few of my projects!</h5>
                    </Link>
                </div>
                <div id="tech-stacks">
                    <h2>Skills:</h2>
                    <h3>JavaScript</h3>
                    <h3>TypeScript</h3>
                    <h3>React</h3>
                    <h3>Next.js</h3>
                    <h3>Node.js</h3>
                    <h3>MongoDB</h3>
                    <h3>Express</h3>
                    <h3>PostgreSQL</h3>
                    <h3>GraphQL</h3>
                    <h3>Cypress</h3>
                </div>
            </main>
        </>
    )
}