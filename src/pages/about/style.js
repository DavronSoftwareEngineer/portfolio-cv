import { styled } from "styled-components";

export const AboutStyle = styled.div`
  padding: 20px;
  .wrapabout {
    .title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 20px;
      color: #173b6c;
      font-family: sans-serif;
      letter-spacing: 1px;
      span {
        border-bottom: 2px solid blue;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
    .text {
      font-size: 1rem;
      font-family: sans-serif;
      text-align: center;
      color: grey;
    }
    
  }
  .grid-wrap {
    margin-top: 70px;
      .grid {
        img{
            border-radius: 5px;
            width: 100%;
            height: 60%;
            object-fit: cover;
        }
      }
      .grid1 {
        .typ-title {
            color: #173b6c;
            font-weight: bold;
            font-size: 1.8rem;
            font-family: sans-serif;
        }
        .typ-text {
            margin-top: 10px;
            font-size: 1rem;
            font-family: sans-serif;
            font-style: italic;
            color: grey;
        }
        .grid-cont {
          .grid-6 {
            ul {
              margin-top: 20px;
              padding-left: 15px;
              list-style-type: square;
              color: grey;
              li {
                margin-bottom: 10px;
                font-size: 1rem;
                font-family: sans-serif;
                span {
                    color: black;
                    margin-right: 10px;
                    font-weight: bold;
                    font-size: 1rem;
                }
              }
            }
          }
        }
        .text-bottom{
            font-size: 1rem;
            font-family: sans-serif;
            margin-top: 20px;
            color: grey;
        }
      }
    }
`;
