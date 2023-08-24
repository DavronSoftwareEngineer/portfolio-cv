import { styled } from "styled-components";


export const BtnLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px 12px;
  background-color: #2c2f3f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #318ce7;
    transform: translateY(-2px);
  }
`;

export const LayoutStyle = styled.section`
  height: 100vh;
  display: flex;
  .wrap-aside {
    .aside {
      width: 300px;
      height: 100%;
      position: fixed;
      background-color: #040b14;
      padding: 20px 20px;
      .top-wrap {
        height: 80%;
        .wrap {
          display: flex;
          justify-content: center;
          .wrap-img {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 8px solid #2c2f3f;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0);
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }
        }
        .user-name {
          color: #fff;
          font-size: 1.3rem;
          text-align: center;
          letter-spacing: 2px;
          word-wrap: break-word;
          margin: 0px;
          margin-top: 15px;
          font-family: sans-serif;
          font-style: italic;
        }
        .wrap-btn {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-top: 15px;
        }
        .wrap-menu {
          margin-top: 30px;
          .menu-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            border-radius: 5px;
            padding: 5px 8px;
            #icon {
              margin-right: 20px;
            }
            .title {
              color: #fff;
              margin: 0;
              font-size: 1rem;
              font-family: sans-serif;
              letter-spacing: 1px;
            }
          }
        }
      }
      footer {
        height: 20%;
        display: flex;
        align-items: end;
        .tel {
          color: #fff;
          font-size: 0.9rem;
          font-family: sans-serif;
          margin-bottom: 5px;
          a {
            color: #1f75fe;
            text-decoration: none;
            font-size: 0.9rem;
            &:hover {
              color: #1f55fe;
            }
          }
        }
        .mail {
          color: #fff;
          font-size: 0.9rem;
          font-family: sans-serif;
          a {
            color: #1f75fe;
            text-decoration: none;
            font-size: 0.9rem;
            &:hover {
              color: #1f55fe;
            }
          }
        }
        .telegram {
          color: #fff;
          font-size: 0.9rem;
          font-family: sans-serif;
          margin-bottom: 5px;

          a {
            color: #1f75fe;
            text-decoration: none;
            font-size: 0.9rem;
            &:hover {
              color: #1f55fe;
            }
          }
        }
      }
    }
  }
  .right-side {
    flex: 1;
    height: 100%;
  }
`;
