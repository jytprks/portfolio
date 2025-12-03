import React from 'react'
import {Dock, Home, Navbar, Welcome, TicTacToe} from '#components'
import { Draggable } from "gsap/Draggable";
import {gsap} from "gsap";
import {Finder, Resume, Safari, Terminal} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main className="App">
            <Navbar />
            <Welcome />
            <Dock/>
            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <TicTacToe/>
            <Home/>
        </main>
    )
}
export default App
