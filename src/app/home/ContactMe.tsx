"use client"

import React, { useState } from 'react'

const HEADER = 'Get in Touch.'
const SUBHEADER = 'Got a question or proposal, or just want to say hello? Feel free to send me a message!'
const NAME_FIELD_LABEL = 'Name*'
const EMAIL_FIELD_LABEL = 'Email*'
const SUBJECT_FIELD_LABEL = 'Subject*'
const MESSAGE_FIELD_LABEL = 'Message*'
const MESSAGE_CHAR_LABEL = ' characters used.'
const BUTTON_LABEL = 'Submit'

const ContactMe = () => {
    const [message, setMessage] = useState('')
    const [charactersUsed, setCharactersUsed] = useState(0)
    const charactersLimit = 500

    const updateCharacterCount = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = document.getElementById('message') as HTMLTextAreaElement
        const currentCharactersUsed = message?.value?.length

        if (currentCharactersUsed <= charactersLimit) {
            setMessage(message?.value)
            setCharactersUsed(currentCharactersUsed)
        } else {
            event.preventDefault()
        }
    }

    return (
        <section id="contact" className="min-h-screen py-20 mx-5 xl:mx-20">
            
            {/* CONTACT ME HEADER */}
            <div className="flex flex-col">
                <h1 className="text-3xl text-center text-yellow-500 font-extrabold md:text-4xl">
                    {HEADER}
                </h1>

                <h2 className="text-2xl text-center text-yellow-700 font-bold md:text-3xl">
                    {SUBHEADER}
                </h2>
            </div>

            {/* CONTACT FORM */}
            <div className="flex justify-center items-center w-full">
                <form className="flex flex-col items-center m-10 gap-5 w-full md:w-2/3">

                    <div className="flex flex-row w-full">
                        {/* NAME FIELD */}
                        <div className="flex flex-col gap-1 w-1/2 pr-2">
                            <label className="font-bold mx-1 my-0.5">{NAME_FIELD_LABEL}</label>
                            <input id="name" className="bg-slate-100 dark:bg-gray-800 px-3 py-2 text-md md:text-lg"></input>
                        </div>

                        {/* EMAIL FIELD */}
                        <div className="flex flex-col gap-1 w-1/2 pl-2">
                            <label className="font-bold mx-1 my-0.5">{EMAIL_FIELD_LABEL}</label>
                            <input id="email" className="bg-slate-100 dark:bg-gray-800 px-3 py-2 text-md md:text-lg"></input>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="font-bold mx-1 my-0.5">{SUBJECT_FIELD_LABEL}</label>
                        <input id="subject" className="bg-slate-100 dark:bg-gray-800 px-3 py-2 text-md md:text-lg"></input>
                    </div>

                    {/* TEXT FIELD */}
                    <div className="flex flex-col gap-1 w-full">
                        {/* LABEL and CHARACTERS */}
                        <div className="flex flex-row justify-between">
                            <label className="font-bold mx-1 my-0.5">{MESSAGE_FIELD_LABEL}</label>
                            <label className={`font-light text-md ${charactersUsed === charactersLimit ? 'text-red-500 animate-bounce' : ''}`}>{charactersUsed}/{charactersLimit}{MESSAGE_CHAR_LABEL}</label>
                        </div>
                        <textarea id="message" value={message} className="bg-slate-100 dark:bg-gray-800 px-3 py-2 h-[400px] text-md md:text-lg resize-none" onInput={(updateCharacterCount)}></textarea>
                    </div>

                    <button className="bg-transparent px-20 py-2 font-bold border-2 border-yellow-500 hover:bg-yellow-500 m-5">{BUTTON_LABEL}</button>

                </form>
            </div>

        </section>
    )
}

export default ContactMe