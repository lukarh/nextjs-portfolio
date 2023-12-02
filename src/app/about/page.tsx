import React, { FC } from 'react';
import Image from 'next/image';

import code from "../../../public/code.png";
import design from "../../../public/design.png";
import consulting from "../../../public/consulting.png";

interface PageProps {

}

const page: FC<PageProps> = (props) => {

    return (
      <div>
        <main className="bg-white px-10 md:px-20 lg:px-40">
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey, I've always been underrated. But not anymore.
              Ya'll gon see me mfs. 
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="lg:flex gap-10">

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt="design image" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating eleegant designs suited for your needs design theory.</p>
              <h4 className="py-4 text-teal-600">Design Tools I use:</h4>
              <p className="text-grey-800 py-1">Photoshop</p>
              <p className="text-grey-800 py-1">Illustrator</p>
              <p className="text-grey-800 py-1">Figma</p>
            </div> 

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <div className="flex justify-center">
                <Image src={consulting} width={100} height={100} alt="consulting image" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating eleegant designs suited for your needs design theory.</p>
              <h4 className="py-4 text-teal-600">Design Tools I use:</h4>
              <p className="text-grey-800 py-1">Photoshop</p>
              <p className="text-grey-800 py-1">Illustrator</p>
              <p className="text-grey-800 py-1">Figma</p>
            </div> 

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} alt="code image" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating eleegant designs suited for your needs design theory.</p>
              <h4 className="py-4 text-teal-600">Design Tools I use:</h4>
              <p className="text-grey-800 py-1">Photoshop</p>
              <p className="text-grey-800 py-1">Illustrator</p>
              <p className="text-grey-800 py-1">Figma</p>
            </div> 

          </div>

        </section>
        </main>
      </div>
    )
}

export default page;