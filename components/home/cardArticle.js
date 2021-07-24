import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Card = styled.div`
grid-column:${props => props.head && ` 1/4`};
  
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
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
      width: 403px;
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
    min-width: 433px;
    min-height: 247px;
    display: grid;
    place-items: center;
    img {
        margin: auto;
        min-width: 433px;
    min-height: 247px;
    }
  }
`;
function CardArticle({ head}) {
  return (
    <Card head={head}>
      <div className="container-text">
        <h4>long established</h4>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div className="date">
          <span>May 20th 2020</span>
          <Link href="/">
            <a>Read more</a>
          </Link>
        </div>
      </div>
      <div className="card-image">
        <Image width={433} height={247} src="/icons/test.png" alt="" />
      </div>
    </Card>
  );
}

export default CardArticle;
