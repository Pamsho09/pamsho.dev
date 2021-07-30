import React from "react";
import styled from "styled-components";
import Link from "next/link";
const StreamsC = styled.div`
  @media (min-width: 450.1px) {
    width: 100%;
    display: grid;
    grid-column: 1/4;
    height: 500px;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    iframe {
      width: 100%;
      height: 500px;
    }
    .container {
      width: 50%;
      display: grid;
      h1 {
        font-weight: bold;
        font-size: 34px;
        line-height: 41px;

        color: #000000;
      }
      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        /* 600 */

        color: #718096;
      }
      a {
        background: #6b46c1;
        border-radius: 5px;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        padding: 13px 9px 13px 9px;
        color: #ffffff;
        max-width: 214px;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;
    display: grid;
    grid-column: 1/4;
    height: auto;
    place-items: center;
    gap: 0.5em;

    iframe {
      width: 100%;
      height: 300px;
    }
    .container {
      width: 80%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-weight: bold;
        font-size: 34px;
        line-height: 41px;

        color: #000000;
      }
      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        /* 600 */

        color: #718096;
      }
      a {
        background: #6b46c1;
        border-radius: 5px;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        padding: 13px 9px 13px 9px;
        color: #ffffff;
        max-width: 214px;
        text-decoration: none;
      }
    }
  }
`;
function Streams() {
  return (
    <StreamsC>
      <div className="container">
        <h1>Aprende en directo.</h1>
        <p>
          Todos los dias apartir de las 20:30pm (GMT-5) me encuentro
          trasmitiendo en mi canal twitch en donde puedes aprender cosas nuevas
          y divertidas uwu
        </p>

        <Link href="">
          <a>Vamos a twitch</a>
        </Link>
      </div>
      <iframe 
        src="https://player.twitch.tv/?channel=pamsho_js&amp;parent=localhost"
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
      ></iframe>
    </StreamsC>
  );
}

export default Streams;
