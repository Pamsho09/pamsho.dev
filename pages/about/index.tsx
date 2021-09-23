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
          margin: 1em 1em;
          height: auto;
          text-decoration: none;
          text-transform: capitalize;
          font-weight: bold;
          color: #000;

          border-radius: 10px;

          background: #ffffff;
          box-shadow: 20px 20px 60px #cfcfcf, -20px -20px 60px #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          .container-icon {
            height: 3em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0 0.5em;
            img {
              width: 2em;
              height: 2em;
            }
          }
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
          margin: 1em 0;
          height: auto;
          text-decoration: none;
          text-transform: capitalize;
          font-weight: bold;
          color: #000;

          border-radius: 10px;
          border: 3px solid #d6d6d6;
          display: flex;
          align-items: center;
          justify-content: center;
          .container-icon {
            height: 3em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
          }
        }
      }
    }
  }
`
const About = () => (
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
          <a
            className="link_icons"
            rel="noreferrer"
            href="https://facebook.com/pamshojs"
          >
            <div className="container-icon">
              <Image
                src="/icons/tiktok/facebook-icon.svg"
                width={30}
                height={30}
              />
              <span>facebook</span>
            </div>
          </a>
          <a
            className="link_icons"
            rel="noreferrer"
            href="https://www.instagram.com/pamsho_js/"
          >
            <div className="container-icon">
              <Image
                src="/icons/tiktok/instagram-icon.svg"
                width={30}
                height={30}
              />
              <span>instagram</span>
            </div>
          </a>
          <a
            className="link_icons"
            rel="noreferrer"
            href="https://www.github.com/pamsho09/"
          >
            <div className="container-icon">
              <Image
                src="/icons/tiktok/github-icon.svg"
                width={30}
                height={30}
              />
              <span>github</span>
            </div>
          </a>
          <a
            className="link_icons"
            rel="noreferrer"
            href="https://www.twitch.com/pamsho_dev/"
          >
            <div className="container-icon">
              <Image
                src="/icons/tiktok/twitch-purple-icon.svg"
                width={30}
                height={30}
              />
              <span>twitch</span>
            </div>
          </a>
          <a
            className="link_icons"
            rel="noreferrer"
            href="https://www.tiktok.com/@pamsho_dev/"
          >
            <div className="container-icon">
              <Image
                src="/icons/tiktok/tiktok-icon.svg"
                width={30}
                height={30}
              />
              <span>tiktok</span>
            </div>
          </a>
           <a
            className="link_icons"
            rel="noreferrer"
            href="https://copytrade.page.link/ibyc"
          >
            <div className="container-icon">
              <Image
                src="/icons/tiktok/tiktok-icon.svg"
                width={30}
                height={30}
              />
              <span>Haz dinero con esta sencilla apliacion xd</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </AboutC>
)

export default About
