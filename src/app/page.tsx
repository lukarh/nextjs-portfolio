import Image from 'next/image';
import Head from 'next/head';

import deved from '../../public/dev-ed-wave.png';

import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';

import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Lukar Huang's Portfolio</title>
      </Head>

      <main className="px-10 md:px-20 lg:px-40">

      </main>

    </div>
  )
}





{/* <section className="min-h-screen">
          
<div className="text-center p-10">
  <h2 className="text-5xl py-2 text-teal-600 md:text-6xl font-extrabold">{personName}</h2>
  <h3 className="text-2xl py-2 md:text-3xl">The Job Title</h3>
  <p className="text-md py-5 leading-8 md:text-xl max-w-lg mx-auto">
    A human being just tryna to provide services for programming and other needs.
    Just give me a job bro.
  </p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
  <AiFillTwitterCircle />
  <AiFillLinkedin />
  <AiFillYoutube />
</div>
<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 m-20 overflow-hidden md:w-96 md:h-96">
  <Image src={deved} objectFit="cover" alt="cover image" />
</div>
</section>

<section>
<div>
  <h3 className="text-3xl py-1">Portfolio</h3>
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

<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
  <div className="basis-1/3 flex-1 ">
    <Image
      className="rounded-lg object-cover w-full h-full"
      src={web1}
      alt="web image"
    />
  </div>
  <div className="basis-1/3 flex-1">
    <Image
      className="rounded-lg object-cover w-full h-full"
      src={web2}
      alt="web image"
    />
  </div>
  <div className="basis-1/3 flex-1">
    <Image
      className="rounded-lg object-cover w-full h-full"
      src={web3}
      alt="web image"
    />
  </div>
  <div className="basis-1/3 flex-1">
    <Image
      className="rounded-lg object-cover w-full h-full"
      src={web4}
      alt="web image"
    />
  </div>
  <div className="basis-1/3 flex-1">
    <Image
      className="rounded-lg object-cover w-full h-full"
      src={web5}
      alt="web image"
    />
  </div>
  <div className="basis-1/3 flex-1">
    <Image
      className="rounded-lg object-cover w-full h-full"
      layout="responsive"
      src={web6}
      alt="web image"
    />
  </div>
</div>

</section> */}