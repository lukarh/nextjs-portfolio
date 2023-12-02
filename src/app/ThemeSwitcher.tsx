"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { BsFillMoonStarsFill } from "react-icons/bs"

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }

    return (
        <div>
            <BsFillMoonStarsFill 
                className="cursor-pointer text-black dark:text-white" 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
        </div>
    )
}

export default ThemeSwitcher;