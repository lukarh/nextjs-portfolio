import React, { FC } from 'react';
import Image from 'next/image';

import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import ContactMe from './ContactMe';

import JumpLinks from './JumpLinks';

interface PageProps {

}

const page: FC<PageProps> = (props) => {

    return (
    // <div className="px-10 md:px-20 lg:px-60">
    <div className="sm:px-20 lg:px-40 z-0">

        <JumpLinks />

        {/* SECTION #1 */}
        <div className="w-full absolute bg-[#F7AB0A]/10 left-0 h-[550px] skew-y-6 -z-10 top-[10%] xl:top-[30%]"></div>
        <About />

        {/* SECTION #2 */}
        <div className="w-full absolute top-[135%] bg-[#F7AB0A]/10 left-0 h-[550px] -skew-y-6 -z-10"></div>
        <Tools />

        {/* SECTION #3 */}
        <div className="w-full absolute top-[235%] bg-[#F7AB0A]/10 left-0 h-[550px] skew-y-6 -z-10"></div>
        <Projects />       

        {/* SECTION #4 */}
        <ContactMe />

      </div>
    )
}

export default page;