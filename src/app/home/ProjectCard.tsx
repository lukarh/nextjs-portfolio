import React from "react"
import Image, { StaticImageData } from "next/image"

import { VscFolder, VscGithubAlt } from "react-icons/vsc"
import { GoLinkExternal } from "react-icons/go"

type ProjectCardProps = {
    title: string,
    description: string,
    image: StaticImageData,
    tools: any[],
    githubURL: string,
    appURL: string,
}

const ProjectCard = ({ title, description, image, tools, githubURL, appURL }: ProjectCardProps) => {

    return (
        //<div className="flex flex-col p-8 gap-2 bg-yellow-400 dark:bg-yellow-500/80">
        //<div className="flex flex-col p-8 gap-2 shadow-xl shadow-gray-200/20 bg-white dark:bg-black transition-transform transform-gpu hover:-translate-y-5">
        <div className="flex flex-col p-8 gap-2 shadow-xl bg-slate-100 dark:bg-gray-800 transition-transform transform-gpu hover:-translate-y-2">

            <div className="flex flex-row justify-between gap-5 mb-10">
                
                {/* PROJECT IMAGE */}
                <div>
                    <VscFolder className="text-6xl" />
                </div>

                {/* PROJECT LINKS */}
                <div className="flex justify-end gap-2 py-2">
                    <a href={githubURL} target="_blank">
                        <VscGithubAlt className="cursor-pointer text-2xl hover:text-yellow-500"/>
                    </a>
                    <a href={appURL} target="_blank">
                        <GoLinkExternal className="cursor-pointer text-2xl hover:text-yellow-500" />
                    </a>
                </div>

            </div>

            {/* PROJECT */}
            <div className="flex flex-col justify-between h-full gap-10">

                {/* PROJECT DETAILS - DESKTOP VIEW */}
                <div>
                    {/* PROJECT TITLE */}
                    <h1 className="text-xl text-md font-extrabold text-yellow-500 mb-2">
                        {title}
                    </h1>

                    {/* <h2 className="pb-2 text-md font-bold">
                        {date}
                    </h2> */}

                    {/* PROJECT DESCRIPTION */}
                    <p className="text-xs sm:text-sm">
                        {description}
                    </p>
                </div>

                {/* PROJECT TOOLS */}
                <div className="flex flex-row flex-wrap gap-2">
                    {
                        tools.map((tool, index) => 
                            <div className="items-center rounded-full px-3 py-1 text-xs bg-yellow-400/10 text-yellow-600">
                                {tool}
                            </div>
                        )
                    }
                </div>

            </div>
            
        </div>
    )
}

export default ProjectCard;