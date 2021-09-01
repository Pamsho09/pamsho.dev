import React from 'react'
// eslint-disable-next-line import/default
import Image from 'next/image'
import styled from 'styled-components'
import { PortableText } from '@/lib/sanity'
const Modal = styled.div`
  width: 100%;
  height: 100vh;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  .back {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2c2c2c5f;
  }
  z-index: 111;

  @media (max-width: 450px) {
    .showProject {
      background-color: #fff;
      width: 100%;
      z-index: 111;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: 0 2em 0 2em;
      height: 60vh;
      position: absolute;
      border-radius: 30px 30px 0 0;
      bottom: 0;
      align-items: center;
      .container {
        .body {
          overflow-y: scroll;
          max-height: 300px;
        }
      }
      justify-content: space-between;
      .viewProject {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          display: grid;
          place-items: center;
          text-decoration: none;
          color: #000;
        }
        h5 {
          margin: 10px;
        }
      }
    }
  }
  @media (min-width: 450.1px) {
    display: grid;
    place-items: center;
    .showProject {
      background-color: #fff;
      width: 50%;
      z-index: 111;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: 0 2em 0 2em;
      height: 60vh;
      position: absolute;
      border-radius: 30px;
      align-items: center;
      .container {
        .body {
          overflow-y: scroll;
          max-height: 400px;
        }
      }
      justify-content: space-between;
      .viewProject {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          display: grid;
          place-items: center;
          text-decoration: none;
          color: #000;
        }
        h5 {
          margin: 10px;
        }
      }
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
}
interface IProps {
  data: IData
  click: () => void
}
const ModalProject = ({ click, data }: IProps) => (
  <>
    <Modal>
      <div className="back" onClick={click}></div>
      <div className="showProject">
        <div className="container">
          <h2>{data.name}</h2>
          <PortableText className="body" blocks={data.bio} />
        </div>
        <div className="viewProject">
          <a href={data.urlDemo} target="_blank" rel="noreferrer">
            <Image src="/icons/wool.svg" width={40} height={40} alt="demo" />
            <h5>Demo</h5>
          </a>
          <a href={data.urlRepo} target="_blank" rel="noreferrer">
            <Image src="/icons/folder.svg" width={40} height={40} alt="repo" />
            <h5>Repo</h5>
          </a>
        </div>
      </div>
    </Modal>
  </>
)

export default ModalProject
