import React from "react";
import styled from "styled-components";
import Image from "next/image";
const Head = styled.div`
  @media (min-width: 450.1px) {
    width: 100%;
    padding: 1em;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 460px;
      .container-hero {
        h1 {
          font-style: normal;
          font-weight: bold;
          font-size: 60px;
          line-height: 73px;
        }
        p {
          color: #4a5568;
        }
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;
    display: grid;
    height: 100vh;
    place-items: center;
    .container {
      width: 100%;
      height: 100vh;
      display: grid;
      place-items: center;
      justify-content: space-between;
      align-items: space-between;
      flex-direction: column;
      height: 460px;
      .container-hero {
        h1 {
          font-style: normal;
          font-weight: bold;
          font-size: 40px;

          text-align: center;
          line-height: 73px;
          padding: 0;
        }
        p {
            text-align: center;
          color: #4a5568;
        }
      }
      .container-img {
        img {
          width: 100%;
        }
      }
    }
  }
`;
function HeadHero() {
  return (
    <Head>
      <div className="container">
        <div className="container-hero">
          <h1>Bienvenido a pamsho.dev</h1>
          <p>Aprende a programar sin miedo.</p>
        </div>
        <div className="container-img">
          <Image width={460} height={320} src="/icons/men.svg" alt="man" />
        </div>
      </div>
    </Head>
  );
}

export default HeadHero;
