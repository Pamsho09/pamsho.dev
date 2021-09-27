import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import styled from 'styled-components'
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
const socialMedia: ISocial[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/pamshoDev',
    color: '#1877f2',
    icon: 'facebook',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/pamsho_dev/',
    color: '#c32aa3',
    icon: 'instagram',
  },
  {
    name: 'github',
    url: 'https://www.github.com/pamsho09/',
    color: '#333',
    icon: 'github',
  },
  {
    name: 'twitch',
    url: 'https://www.twitch.com/pamsho_dev/',
    color: '#9146ff',
    icon: 'twitch',
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@pamsho_dev/',
    color: '#ee1d52',
    icon: 'tiktok',
  },
  {
    name: 'OctaFx',
    url: 'https://copytrade.page.link/ibyc',
    color: '#34a853',
    icon: 'default',
  },
]
const About = (): JSX.Element => (
  <AboutC>
    <div className="profile">
      <Image
        className="profile-image"
        src="/icons/img-about.jpg"
        width={300}
        height={300}
      />
      <h1>Francisco Jimenez</h1>
    </div>
    <div className="profile-details">
      <h4>Frontend Developer</h4>
      <p>
        Hola que tal me llamo Francisco soy un joven programador,que desde que
        era pequeño me encantaba la tecnologia,con el paso del los años descubri
        que lo que me apacionaba era la programacion actualmente me encanta el
        la programacion web y me encuentro profundizando en este mundo desde el
        frontend , el backend y devops en este sitio encontras una colecion de
        las cosas que aprendo y en lo que trabajo desde apuntes personales,mis
        proyectos personales y algunos cursos uwu.
      </p>

      <div className="social">
        <h3>Puedes seguirme en mis redes sociales uwu.</h3>
        <div className="container-icons">
          {socialMedia.map((social: ISocial) => (
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
                    src={`/icons/tiktok/${social.icon.toLowerCase()}.svg`}
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
