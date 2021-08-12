/* eslint-disable react/react-in-jsx-scope */
import styled, { keyframes } from 'styled-components'

const NotFound = styled.div`
  width: 80%;
  margin: auto;
  height: 80vh;
  display: grid;
  place-items: center;
  .container {
    text-align: center;
    width: 50%;
    img {
      width: 100%;
      max-width: 300px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
  }
  span {
    width: 100%;
  }
`

const Custom404 = (): JSX.Element => (
  <NotFound>
    <div className="container">
      <img src="./notfound.png" />
      <h3>
        <span>Hmmm!</span> No encontre lo que buscabas.
      </h3>
      <h4>Me perdonas </h4>
    </div>
  </NotFound>
)
export default Custom404
