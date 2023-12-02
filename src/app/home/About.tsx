"use client"

import React from 'react'
import Image from 'next/image'
import profilePicture from '../../../public/pictures/profilePicture.png'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { FaLinkedinIn, FaLinkedin, FaGithubSquare, FaGithub } from "react-icons/fa"

const NAME = "Lukar Huang"
const DESCRIPTION = 
`
I'm a Full-Stack Developer who loves learning new web technologies and building visually-appealing products that impact people, create tangible value, and drive positive change within the digital realm.
`
// const DESCRIPTION = `
// Got a random idea? Code it.
// `
const MORE_DESCRIPTION = "I am currently looking for opportunities in Software, so please feel free to reach out to me!"

const OTHER = 
`
Aside from coding, I love working out, playing a variety of sports, listening to music, or taking walks. I'll also
occasionally write a blog post about basketball.
`

const GITHUB_LINK = 'https://github.com/lukarh'
const LINKEDIN_LINK = 'https://www.linkedin.com/feed/'

const About = () => {
    const [text, count] = useTypewriter({
        words: [
            "Full-Stack Developer.",
            "Tech & Data Enthusiast.",
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <section id="about" className="flex justify-center min-h-screen py-20 xl:py-0 mx-10 md:mx-20 xl:mx-40">

            <div className="flex flex-col xl:flex-row items-center">

                {/* ABOUT DESCRIPTION */}
                <div className="flex flex-col text-center pr-0 pb-5 xl:text-left xl:pb-0">

                    {/* ABOUT MAIN INFO */}
                    <div className="flex flex-col">

                        <h1 className="text-5xl pb-2 font-extrabold lg:text-6xl text-yellow-500">
                            {NAME}
                        </h1>

                        <h2 className="text-2xl pb-4 font-extrabold lg:text-3xl text-yellow-700">
                            <span>{text}</span>
                            <Cursor cursorColor="#F7AB0A" />
                        </h2>

                    </div>

                    {/* ABOUT MORE INFO/DESCRIPTION */}
                    <div className="flex flex-col pb-4 gap-4 xl:w-4/5">
                        <p>
                            {DESCRIPTION}
                        </p>
                        <p>
                            {MORE_DESCRIPTION}
                        </p>
                        <p>
                            {OTHER}
                        </p>
                    </div>

                    {/* PROFILE HYPERLINKS */}
                    <div className="flex flex-row gap-3 ">
                        <a href={GITHUB_LINK}>
                            <FaGithub className="text-3xl" />
                        </a>
                        <a href={LINKEDIN_LINK}>
                            <FaLinkedinIn className="text-3xl" />
                        </a>
                    </div>

                </div>

                {/* ABOUT PROFILE */}
                <div className="items-center px-5 py-5 md:py-0">
                    {/* IMAGE CONTAINER */}
                    <div className='mx-auto rounded-full overflow-hidden w-80 h-80 md:w-200 md:h-200'>
                        <Image src={profilePicture} alt="profile-picture" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;