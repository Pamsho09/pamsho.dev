import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { convertDate } from '../../lib/utils'
import styled from 'styled-components'
const CardC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    /* 800 */

    color: #2d3748;
  }
  .container-text {
    display: grid;
    padding: 43px 53px;
    h4 {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;

      margin: 0px;
      color: #2d3748;
    }
    p {
      width: 258px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;

      color: #718096;
    }
    .date {
      width: 100%;
      display: flex;
      justify-content: space-between;
      span {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        /* 600 */

        color: #718096;
      }
    }
  }
  .card-image {
    min-width: 297px;
    min-height: 179px;
    display: grid;
    place-items: center;
    img {
      margin: auto;
      min-width: 297px;
      min-height: 179px;
    }
  }
`
const Card = (props: any) => {
  const date = convertDate(props.publishedAt)
  return (
    <CardC>
      <div className="container-text">
        <Link href={`/post/${props.slug.current}`}>
          <a>
            {' '}
            <h4>{props.title}</h4>
          </a>
        </Link>

        <div className="date">
          <span>{date}</span>
        </div>
      </div>
      <div className="card-image">
        <Image
          src={urlFor(props.mainImage).url()}
          width={297}
          height={179}
          alt={props.title}
        />
      </div>
    </CardC>
  )
}

export default Card
