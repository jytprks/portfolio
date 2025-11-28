import React from 'react'
import {WindowControls} from "#components";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {locations} from "#constraints";
import useLocation from "#store/location.js";
import clsx from "clsx";

const Finder = () => {
    const {activeLocation,setActiveLocation} = useLocation()
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {
                    items.map(item => (
                    <li key={item.id}
                        onClick={()=>setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation?.id ? 'active' : '',
                        )}>
                        <img src={item.icon} alt={item.name} className="w-4"/>
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
    return (<>
            <div id="window-header">
                <WindowControls target="finder"/>
                <Search className="icon"/>
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favorites",Object.values(locations))}
                    {renderList("Works",locations.work.children)}
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow
