import React from 'react'
import styled from "styled-components"
import Image from "next/image"
const Head =styled.div`
width: 100%;
padding:1em;
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 460px;
    .container-hero{
       h1{
        font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 73px;
       }
       p{
           color:#4A5568;
       }
    }
}
`
function HeadHero() {
    return (
        <Head>
        <div className="container">
            <div className="container-hero">
                <h1>Bienvenido a pamsho.dev</h1>
                <p>Aprende a programar sin miedo.</p>
            </div>
            <div className="container-img">
                <Image width={460} height={320} src="/icons/man.svg" alt="man"/>
            </div>

        </div>
        </Head>
    )
}

export default HeadHero
