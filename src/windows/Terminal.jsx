import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constraints";
import {Check, Flag} from "lucide-react";
import {WindowControls} from "#components";

const Terminal = () => {
    return <>
        <div id="window-header">
            <WindowControls  target="terminal"/>
            <h2 className="title">Tech Stack</h2>
        </div>

        <div className="techstack">
            <p className="font-bold">
                <span>@Admin % </span>
                Show tech stack
            </p>
            <div className="label">
                <p className="w-32">Category</p>
                <p>Technology</p>
            </div>

            <div className="content">
                {techStack.map(({category, items}) => (
                    <li key={category} className="flex items-center">
                        <Check className="check" size={20}/>
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}{ index < items.length -1 ? ',' : ''}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </div>

            <div className="footnote">
                <p>
                    <Check size={20}/>  {techStack.length} of {techStack.length} stacks loaded successfully (100%)
                </p>
                <p className="text-black">
                    <Flag size={15} fill="black"/> Render Time: 5ms
                </p>
            </div>
        </div>
    </>
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');
export default TerminalWindow
