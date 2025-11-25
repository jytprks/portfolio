import React, {useEffect, useState} from 'react'
import {navIcons, navLinks} from "#constraints";
import dayjs from "dayjs";
import useWindowStore from "#store/window.js";

const Navbar = () => {
    const { openWindow } = useWindowStore()
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000); // update every second

        return () => clearInterval(interval); // cleanup
    }, []);
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-medium">Jyotiprakash Ghorai's Macbook</p>
                <ul>
                    {
                        navLinks.map(({id, name , type },) => (<li key={id} onClick={()=>openWindow(type)}><p>{name}</p></li>))
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map(({id, img},) => (<li key={id}><img src={img} className="icon-hover" alt={`icon-${id}`}/></li>))
                    }
                </ul>
                <time>{currentTime.format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}
export default Navbar
