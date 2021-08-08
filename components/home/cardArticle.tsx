import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { convertDate } from '../../lib/utils'
const Card = styled.div`
  @media (min-width: 450.1px) {
    width: 100%;
    grid-column: ${(props: any) => props.head && ` 1/4`};
    place-items: center;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
    border-radius: 5px;
    display: flex;
    width: ${(props) => !props.head && '297px'};
    align-items: center;
    ${(props) => !props.head && `min-height:417px; `}
    ${(props) => !props.head && ` flex-direction: column-reverse;`}
   
    justify-content: space-between;
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
        width: ${(props: any) => (props.head ? '403px' : '258px')};
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
        a {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 15px;
          /* identical to box height */

          /* 800 */

          color: #2d3748;
        }
      }
    }
    .card-image {
      min-width: ${(props: any) => (props.head ? '433px' : '297px')};
      min-height: ${(props: any) => (props.head ? '247px ' : '179px')};
      max-width: ${(props: any) => (props.head ? '433px' : '297px')};
      max-height: ${(props: any) => (props.head ? '247px ' : '179px')};
      display: grid;
      place-items: center;
      img {
        margin: auto;
        min-width: ${(props: any) => (props.head ? '433px' : '297px')};
        min-height: ${(props: any) => (props.head ? '247px ' : '179px')};
        max-width: ${(props: any) => (props.head ? '433px' : '297px')};
        max-height: ${(props: any) => (props.head ? '247px ' : '179px')};
      }
    }
  }
  @media (max-width: 450px) {
    margin: 0.5em;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
    border-radius: 5px;
    display: flex;
    width: 297px;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
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
        a {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 15px;
          /* identical to box height */

          /* 800 */

          color: #2d3748;
        }
      }
    }
    .card-image {
      min-width: 297px;
      min-height: 179px;
      max-width: 297px;
      max-height: 179px;
      display: grid;
      place-items: center;
      img {
        margin: auto;
        min-width: 297px;
        min-height: 179px;
        max-width: 297px;
        max-height: 179px;
      }
    }
  }
`
interface Idata {
  title: string
  description: string
  mainImage: any
  slug: any
  publishedAt: string
}
interface Iprops {
  data: Idata
  head: boolean
}
const CardArticle = ({ data, head }: Iprops): JSX.Element => {
  const { title, description, mainImage, slug, publishedAt } = data

  const date = convertDate(publishedAt)

  const widthMovil = 297
  const widthDesktop = 433
  const heightMovil = 179
  const heightDesktop = 247

  return (
    <Card head={head}>
      <div className="container-text">
        <h4>{title}</h4>

        <p></p>
        <div className="date">
          <span>{date}</span>
          <Link href={`/post/${slug.current}`}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
      <div className="card-image">
        <Image
          width={head ? widthDesktop : widthMovil}
          height={head ? heightDesktop : heightMovil}
          src={urlFor(mainImage).url()}
          alt=""
        />
      </div>
    </Card>
  )
}

export default CardArticle
