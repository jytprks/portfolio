import React from 'react'
import {Dock, Navbar, Welcome} from '#components'

const App = () => {
    return (
        <main className="App">
            <Navbar />
            <Welcome />
            <Dock/>
        </main>
    )
}
export default App
