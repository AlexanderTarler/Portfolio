'use client'
import '../globals.css';
import './current.css';



export default function Current() {

    return (
        <>
            <main>
                <div id="coding">
                    <h1 className='project-type'>Coding</h1>
                    <div className='project-text'>
                        <h3>Dungeons and Dragons Toolkit</h3>
                        I am currently working on a web application for Dungeons and Dragons 5E. The goal is to make the experience of running a game of D&D to be as smooth as possible for the DM,
                        providing needed resources, allowing the DM to save these resources for later and to make the planning phase as smooth as possible.
                        It is currently not hosted, but will hopefully be up and running soon, and when it is you can find it in my portfolio. </div>
                </div>
                <div id="game-development">
                    <h1 className='project-type'>Game Development</h1>
                    <div className='project-text'>
                        <h3>Untitled Horror Game</h3>
                        I am creating a horror game where the goal is to survive being hunted. The player must find a way to evade the invader while escaping the area.
                    </div>
                </div>
            </main>
        </>
    )
}