import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import styled from 'styled-components'
import { getClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import { PortableText, urlFor } from '@/lib/sanity'
const AboutC = styled.div`
  @media (min-width: 450.1px) {
    width: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 30% 70%;
    place-items: center;
    padding-top: 1em;
    .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .profile-details {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .profile-image {
      border-radius: 50%;
      width: 200px;
      height: auto;
    }
    p {
      width: 80%;
      text-align: justify;
    }
    .social {
      width: 80%;
      display: grid;
      .container-icons {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .link_icons {
          margin: 5px;
          text-decoration: none;
        }
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
    .profile-details {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1em;
    }
    .profile-image {
      border-radius: 50%;
      width: 200px;
    }
    p {
      width: 80%;
      text-align: justify;
    }
    .social {
      width: 80%;
      display: grid;
      .container-icons {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        .link_icons {
          margin: 5px 0;
          text-decoration: none;
        }
      }
    }
  }
`

const ContainerIcons = styled.div`
  @media (min-width: 450.1px) {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    span {
      color: #ffffff;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
  @media (max-width: 450px) {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    span {
      color: #ffffff;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
`
interface ISocial {
  name: string
  url: string
  color: string
  icon: string
}

const About = ({ data }: any): JSX.Element => (
  <AboutC>
    <div className="profile">
      <Image
        className="profile-image"
        src={urlFor(data.image).url()}
        width={300}
        height={300}
      />
      <h1>{data.name}</h1>
    </div>
    <div className="profile-details">
      <h4>{data.specialty}</h4>
      <PortableText blocks={data.bio[0]} />

      <div className="social">
        <h3>Puedes seguirme en mis redes sociales uwu.</h3>
        <div className="container-icons">
          {data.social.map((social: ISocial) => (
            <>
              <a
                key={social.name}
                className="link_icons"
                rel="noreferrer"
                target="_blank"
                href={social.url}
              >
                <ContainerIcons color={social.color}>
                  <Image
                    src={urlFor(social.icon).url()}
                    width={30}
                    height={30}
                  />
                  <span>{social.name}</span>
                </ContainerIcons>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  </AboutC>
)

export default About
const Query = groq`
*[_type == "author" ][0]{
  bio,image,name,social,specialty
}
`
export const getServerSideProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(Query)
  return {
    props: {
      preview,
      data,
    },
  }
}
