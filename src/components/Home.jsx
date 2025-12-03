import React from 'react'
import {locations, installedApps} from "#constraints";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

const projects = locations.work?.children ?? []


const Home = () => {
    const { setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()
    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project)
        openWindow('finder')
    }
    const handleAppStarting = (app) =>{
        openWindow(app.name)
    }
    useGSAP(() => {
        Draggable.create(".folder")
    })
    return (
        <div id="home">
            <ul>
                {
                    projects.map((project) => (
                        <li key={project.id}
                            className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}>
                            <img src="/images/folder.png" alt={project.name} />
                            <p>{project.name}</p>
                        </li>
                    ))
                }
            </ul>

            <ul>
                {
                    installedApps.map((app) => (
                        <li key={app.id}
                            className={clsx("group folder", app.windowPosition)}
                            onClick={() => handleAppStarting(app)}>
                            <img src={app.icon} alt={app.name} className="w-20 h-20 rounded-2xl shadow-lg object-cover transition-all duration-300 hover:scale-110" />
                            <p>{app.disPlayName}</p>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
export default Home
