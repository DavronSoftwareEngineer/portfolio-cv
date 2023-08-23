import { styled } from "styled-components";
import user1 from './photo/user1.jpg';

export const HomeStyle = styled.div`
    height: 100%;
    background-image: url(${user1});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 30%;
    padding-left: 10%;
    .wraphom{
        /* background-color: rgba(33, 36, 49, 0.2); */
        /* box-shadow: 0px 0px 5px 5px rgba(33, 36, 49, 0.3) inset; */
        /* padding: 5px; */
        /* border-radius: 5px; */
        width: 45%;
        .title{
            font-size: 2.5rem;
            color: #211431;
            font-weight: bold;
            font-family: sans-serif;
            letter-spacing: 1px;
        }
        p{
            font-size: 1.4rem;
                font-family: sans-serif;
                letter-spacing: 1px;
                color: #211431;
                margin: 0;
                font-weight: bold;
            span{
                font-size: 1.4rem;
                font-family: sans-serif;
                letter-spacing: 1px;
                color: #211431;
                font-weight: bold;
                border-bottom: 2px solid #318CE7;
            }
        }
    }
`;