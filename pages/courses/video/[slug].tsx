import { PortableText } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const VideoC = styled.div`
  width: 100%;
  padding: 1em;
  display: grid;
  box-sizing: border-box;
  @media (min-width: 450.1px) {
    .container-resource {
      width: 100%;
      display: grid;
      grid-template-columns: 70% 30%;
      .container-resource-video {
        width: 100%;
        overflow: hidden;
        iframe {
          width: 741px;
          height: 422px;

          border-radius: 16px;
        }
      }
      .container-resource-bonus {
        width: 100%;
        .container-button {
          width: 100%;
          background: #27ae60;
          border-radius: 16px;
          display: grid;
          place-items: center;
          padding: 11px;
          box-sizing: border-box;
          cursor: pointer;
          h4 {
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 19px;
            line-height: 23px;
            text-align: justify;
            margin: 0;
            color: #f2f2f2;
          }
          span {
            margin: 0;
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            text-align: justify;

            color: #f2f2f2;
          }
        }
        h3 {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 23px;
          line-height: 28px;
          text-align: justify;
        }
        .list-resource {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          a {
            margin: 0.5em;
            cursor: pointer;
            width: auto;
            height: auto;
            text-decoration: none;
            li {
              list-style: none;
              padding: 0.5em 1em;
              background: #eb5757;
              border-radius: 5px;
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              text-align: center;

              color: #ffffff;
            }
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .container-resource {
      width: 100%;
      .container-resource-video {
        width: 100%;
        overflow: hidden;
        iframe {
          width: 350px;

          height: 204px;

          border-radius: 16px;
        }
      }
      .container-resource-bonus {
        .container-button {
          width: 100%;
          background: #27ae60;
          border-radius: 16px;
          display: grid;
          place-items: center;
          padding: 11px;
          box-sizing: border-box;
          cursor: pointer;
          h4 {
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 19px;
            line-height: 23px;
            text-align: justify;
            margin: 0;
            color: #f2f2f2;
          }
          span {
            margin: 0;
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            text-align: justify;

            color: #f2f2f2;
          }
        }
        h3 {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 23px;
          line-height: 28px;
          text-align: justify;
        }
        .list-resource {
          display: flex;
          flex-wrap: wrap;
          a {
            margin: 0.5em;
            cursor: pointer;
            width: auto;
            height: auto;
            text-decoration: none;
            li {
              list-style: none;
              padding: 0.5em 1em;
              background: #eb5757;
              border-radius: 5px;
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              text-align: center;

              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .container-content {
    width: 100%;
    display: grid;
    place-items: center;
    padding: 2em;
    box-sizing: border-box;
    h1 {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
    }
    p {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      text-align: justify;

      color: #000000;
    }
  }
`
const Video = ({ data }: any) => {
  const router = useRouter()
  return (
    <VideoC>
      <h1>Curso basico de react</h1>
      <div className="container-resource">
        <div className="container-resource-video">
          <iframe
            src={data.urlVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="container-resource-bonus">
          {data.nextVideo && (
            <div
              className="container-button"
              onClick={() =>
                router.push(`/courses/video/${data.nextVideo.slug.current}`)
              }
            >
              <h4>Siguiente leccion</h4>
              <span> {data.nextVideo.title}</span>
            </div>
          )}
          <h3>Recursos:</h3>
          <ul className="list-resource">
            {data.resource.map((resource: any, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
              >
                <li>{resource.name}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-content">
        <PortableText blocks={data.body[0].body} />
      </div>
    </VideoC>
  )
}

export default Video
const videoQuery = groq`
  *[_type == "video" && slug.current == $slug][0] {
    title,
    urlVideo,
    resource,
    "slug": slug.current,
    "body" : body[]->,
   "nextVideo": nextVideo->{title, slug}
  }
`

export const getStaticProps = async ({ params, preview = false }) => {
  if (!params.slug || params.slug === '') {
    return {
      notFound: true,
    }
  }
  const video = await getClient(preview).fetch(videoQuery, {
    slug: params.slug,
  })

  if (!video || video.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      preview,
      data: { ...video },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "video" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
