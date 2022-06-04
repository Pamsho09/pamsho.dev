import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'

const HeadHero = (): JSX.Element => (
  <div className="w-full grid h-screen  items-center md:p-4 md:h-auto ">
    <div className="container w-full h-[460px] grid md:flex place-items-center justify-between content-between flex-col">
      <div>
        <h1 className="container-hero font-bold text-4xl text-center md:text-6xl  ">
          Bienvenido a pamsho.dev
        </h1>
        <p className=" text-hero-color text-center md:mt-10 md:mb-10">
          No soy el mejor pero te puedo ayudar.
        </p>
      </div>
      <div className="container-img">
        <Image
          width={460}
          height={320}
          src="/icons/men.svg"
          alt="man"
          className="w-full"
        />
      </div>
    </div>
  </div>
)

export default HeadHero
