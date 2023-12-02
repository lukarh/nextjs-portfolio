"use client"
import React from 'react'

import Sphere from './icons.js'

const toolItems = [
    {
        title: 'Languages',
        tools: ['Python','JavaScript','CSS','HTML','TailwindCSS']
    },
    {
        title: 'Frameworks',
        tools: ['Next.js','Express.js','Node.js','React.js','Jest.js','Dash']
    },
    {
        title: 'Databases',
        tools: ['SQL','MongoDB','PostgreSQL']
    },
    {
        title: 'Dev Tools',
        tools: ['GitHub','VSCode','Jupyter','Heroku']
    }
]

const HEADER = "Programming Languages & Tools"

type ToolSectionProps = {
    label: string,
    tools: any[],
}

const ToolSection = ({ label, tools }: ToolSectionProps) => {

    return (
        <div className="flex flex-col py-4">
            
            <h1 className="text-xl font-bold mb-2 text-center xl:text-left xl:text-2xl">
                {label}
            </h1>

            <div className="flex flex-row flex-wrap gap-4 justify-center xl:justify-start">
            {
                tools.map((tool, index) => (
                    <div className="border-2 border-yellow-900 text-yellow-500 px-2 py-1 text-md xl:text-lg">
                        {/* <span className="text-sm xl:text-md">{tool}</span> */}
                        {tool}
                    </div>
                ))
            }
            </div>

        </div>
    )
}


const Tools = () => {
    
    return (
        <section id="tools" className="py-20 w-full min-h-screen">

            {/* TOOLS HEADER */}
            <div className="flex justify-center pb-10">
                <h1 className="text-3xl text-center text-yellow-500 font-extrabold mt-[5rem] md:text-4xl">
                    {HEADER}
                </h1>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row mx-10  xl:mx-40">

                {/* TOOLKIT DESCRIPTION */}
                <div className="w-full xl:w-1/2">

                    {
                        toolItems.map((item, index) =>
                            <ToolSection key={index} label={item.title} tools={item.tools} />
                        )
                    }

                </div>

                {/* REACT ICON CLOUD CONTAINER */}
                <div className="flex justify-center w-full pt-10 xl:pt-0 xl:w-1/2 xl:justify-end">
                    <Sphere />
                </div>

            </div>


            

            {/* TOOL CARDS */}
            {/* <div className="xl:flex flex-wrap items-center justify-center">
                {
                    toolItems.map((tool, index) => 
                        <div className="xl:w-1/2 px-10">
                            <ToolCard key={index} image={tool.image} title={tool.title} items={tool.items} />
                        </div>
                    )
                }
            </div> */}

        </section>
    )
}

export default Tools