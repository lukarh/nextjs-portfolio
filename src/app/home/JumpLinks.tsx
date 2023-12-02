"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"

const jumplinks = [
    {
        sectionId: 'about',
        href: '#about',
        label: 'About'
    },
    {
        sectionId: 'tools',
        href: '#tools',
        label: 'Tools'
    },
    {
        sectionId: 'projects',
        href: '#projects',
        label: 'Projects'
    },
    {
        sectionId: 'contact',
        href: '#contact',
        label: 'Contact'
    },
]

type JumpLinkProps = {
    activeSection: string,
    sectionId: string,
    href: string,
    label: string
}

const JumpLink = ({ activeSection, sectionId, href, label }: JumpLinkProps) => {

    return (
        <li className={`flex flex-row items-center gap-2 cursor-pointer transition-opacity duration-300 ${activeSection === sectionId ? 'opacity-100 text-xl' : 'opacity-50 text-xs'}`}>
            <span className={`h-0.5 bg-yellow-500 ${activeSection === sectionId ? 'w-10' : 'w-5'}`} style={{ transition: 'width 0.3s ease' }}></span>
            <Link href={href}>
                {label}
            </Link>
        </li>
    )
}

const JumpLinks = () => {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const observerOptions: IntersectionObserverInit = {
            rootMargin: '-50% 0px -50% 0px'
        }

        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)

        sections.forEach((section) => {
            observer.observe(section)
        })
    }, [])

    return (
        <div className="hidden fixed left-0 top-1/2 ml-5 lg:block">
            <nav>
                <ul>
                    {
                        jumplinks.map((jumplink, index) => 
                            <JumpLink key={index} activeSection={activeSection} sectionId={jumplink.sectionId} href={jumplink.href} label={jumplink.label} />
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default JumpLinks