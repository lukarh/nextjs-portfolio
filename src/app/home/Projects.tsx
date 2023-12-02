import React from 'react'

import ProjectCard from './ProjectCard'
import VibeifyImage from '../../../public/pictures/projects/vibeify.png'
import DiscordBotImage from '../../../public/pictures/projects/discord-bot.png'
import PlayerDashboardImage from '../../../public/pictures/projects/player-passing-profiles-dashboard.png'

const projectItems = [
    // {
    //     title: "Portfolio Website",
    //     description: `A third-party web-application for avid Spotify Users to visualize their Spotify Data and get song recommendations.
    //         Users can see who their current and past top artists, top tracks, recently played tracks, and insightful patterns to their recently played music.
    //     `,

    //     tools: ["NextJS","TypeScript","TailwindCSS"],
    //     image: null,
    // },
    {
        title: "Vibeify",
        description: `A third-party web-application for avid Spotify Users to visualize their Spotify Data and get song recommendations.
            Figure out who are your top artists or tracks currently and in the past. Visualize your recently played music data in a whole 
            a new way.
        `,
        date: "July 2023",
        tools: ["MongoDB","Express.js","React.js","Heroku","CSS","JavaScript","Jest.js","Material-UI","Spotify Web API"],
        image: VibeifyImage,
        githubURL: "https://github.com/lukarh/vibeify", 
        appURL: "https://vibeify-1cdb0dbbe555.herokuapp.com/",
    },
    {
        title: "Tracking Player Assists Dashboard",
        description: `A web-application that utilizes +5000 manually tracked data points and provides a comprehensive player profile report on their passing and assist tendencies, 
            facilitating real-time exploration of spatial data, basketball data, and film simultaneously. Made for fans, scouts, coaches, and players in mind.
        
        `,
        date: "Feb 2021 - Mar 2021, Jun 2023",
        tools: ["Python","Dash","Plotly","PostgreSQL","Heroku","SQLAlchemy","Bootstrap Components"],
        image: PlayerDashboardImage,
        githubURL: "https://github.com/lukarh/assists-tracking-dash-app", 
        appURL: "https://tracking-dashboard-app.herokuapp.com/dashboard",
    },
    {
        title: "NBA Stats & Bets Discord Bot",
        description: `A interactive Discord Bot that users in a Discord server can engage with to view real-time game statistics from live games and
            place bets on games using fictitious points. Powered by NBA Live API and FanDuel's Game Odds.
        `,
        date: "May 2023",
        tools: ["MongoDB","Discord API","Node.js","JavaScript","NBA Live API"],
        image: DiscordBotImage,
        githubURL: "https://github.com/lukarh/nba-discord-bot", 
        appURL: "https://github.com/lukarh/nba-discord-bot",
    },
    {
        title: "Portfolio Website",
        description: `A responsive portfolio website to showcase my skills, projects, and experiences in a visually appealing and user-friendly manner.
        
        `,
        date: "May 2023",
        tools: ["TypeScript","TailwindCSS","Next.js","HTML"],
        image: DiscordBotImage,
        githubURL: "https://github.com/lukarh/nextjs-portfolio",
        appURL: "https://github.com/lukarh/nextjs-portfolio",
    }
]

const HEADER = "What I've Built"

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 mx-5 xl:mx-20">
        
        {/* PROJECTS HEADER */}
        <h1 className="text-4xl text-center font-extrabold pb-10 md:text-3xl xl:text-left text-yellow-500">
            {HEADER}
        </h1>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                projectItems.map((project, index) => 
                    <ProjectCard 
                    key={index}
                    title={project.title} 
                    description={project.description} 
                    tools={project.tools} 
                    image={project.image} 
                    githubURL={project.githubURL}
                    appURL={project.appURL}
                    />
                )
            }
        </div>

    </section>
  )
}

export default Projects