import React from 'react'

// eslint-disable-next-line import/default
import Image from 'next/image'
const Footer = (): JSX.Element => (
  <div className="w-full h-16 grid md:flex md:justify-between md:items-center place-items-center md:pl-0 md:pr-0 md:pt-12 md:pb-12">
    <span className="w-full text-center md:text-left">
      <b>Pamsho_dev</b> 2020 copyright all rights reserved
    </span>
    <div className="w-1/2 flex justify-between md:justify-end items-center">
      <a
        target="_blank"
        href="https://www.instagram.com/pamsho_dev"
        rel="noreferrer"
        className=" md:mr-4 social-fb"
      >
        <Image
          src="/icons/instagram.svg"
          width={20}
          height={20}
          alt="instagram"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/pamsho-js/"
        rel="noreferrer"
        className=" md:mr-4 social-tw"
      >
        <Image
          src="/icons/linkedin.svg"
          width={20}
          height={20}
          alt="linkedin"
        />{' '}
      </a>
      <a
        target="_blank"
        href="https://github.com/Pamsho09"
        rel="noreferrer"
        className=" md:mr-4 social-ig"
      >
        <Image src="/icons/github.svg" width={20} height={20} alt="Twitter" />{' '}
      </a>
    </div>
  </div>
)

export default Footer
