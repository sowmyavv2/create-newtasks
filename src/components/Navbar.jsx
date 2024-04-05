import React from "react";

import { useState } from "react";

export default function Navbar({onStartAddProj, projects, onSelProj, selectedProjId}) {

    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50">
                <h2>You Projects</h2>
                <div>
                    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 text-stone-400"
                    onClick={onStartAddProj}  
                    >+ Add Project</button>
                   

                </div>
                <ul>
                    {projects.map((x) => {
                        return <li key={x.id}>
                        <button className="w-full text-left px-2 py-1 rounded-sm text-stone-400" onClick={onSelProj}>
                            {x.title} 
                        </button>
                    </li>})
                    } 
                </ul>
                <p>
                    <label>
                    </label>
                   
                </p>
            </aside>
        </>
    )

}