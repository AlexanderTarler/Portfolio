'use client'
import './globals.css';

import Welcome from './Welcome';
import { useGlobalContext } from './Context/store';


export default function Home() {
  return (
    <>
      <Welcome />
    </>
  )
}