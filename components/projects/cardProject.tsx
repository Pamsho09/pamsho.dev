import { urlFor } from '@/lib/sanity'
// eslint-disable-next-line import/default
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const Card = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;

    box-shadow: 4px 8px 20px rgb(0 0 0 / 20%);
    .card-image {
      width: 100%;
      display: grid;
      img {
        margin: auto;
        width: 100%;
      }
    }
    .container-text {
      width: 100%;
      text-align: center;
    }
  }
  @media (min-width: 450.1px) {
    width: 297px;
    max-height: 250px;
    border-radius: 20px;
    margin: 1em;
    overflow: hidden;
    box-shadow: 4px 8px 20px rgb(0 0 0 / 20%);
    .card-image {
      width: 100%;
      display: grid;
      img {
        margin: auto;
        width: 100%;
      }
    }
    .container-text {
      width: 100%;
      text-align: center;
    }
  }
`
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
    console.log(data)
    click(data)
  }
  return (
    <Card>
      {' '}
      <div className="card-image" onClick={handleCLick}>
        <Image src={urlFor(image).url()} width={297} height={179} alt={name} />
      </div>
      <div className="container-text">
        <h4>{name}</h4>
      </div>
    </Card>
  )
}

export default CardProject
