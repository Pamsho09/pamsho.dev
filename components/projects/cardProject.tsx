import { urlFor } from '@/lib/sanity'
// eslint-disable-next-line import/default
import Image from 'next/image'
import React from 'react'

interface IData {
  _id: string
  image: any
  name: string
  bio: any
  urlRepo: string
  urlDemo: string
  click?: (IData) => void
}
const CardProject = ({
  _id,
  image,
  name,
  bio,
  urlRepo,
  urlDemo,
  click,
}: IData): JSX.Element => {
  const handleCLick = () => {
    const data = { _id, image, name, bio, urlRepo, urlDemo }
    click(data)
  }
  return (
    <div className=" md:w-72 rounded-md  overflow-hidden m-4 shadow-md box-border">
      {' '}
      <div className="w-full grid md:w-72" onClick={handleCLick}>
        <Image
          className="w-full md:w-72"
          src={urlFor(image).url()}
          width={297}
          height={179}
          alt={name}
        />
      </div>
      <div className="w-full text-center">
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default CardProject
