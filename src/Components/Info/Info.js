import React from "react";
import styled from "styled-components";
import { scale } from "../Common/Keyframe";

const Information = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 0px 0px 5px 5px;
    background-color: #eee;
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    @media only screen and (min-width: 320px) {
      padding-top: 10%;
    }
    @media only screen and (min-width: 768px) {
      padding-top: 5%;
    }
    @media only screen and (min-width: 1224px) {
      padding-top: 10px;
    }
`;

const InfoLogo = styled.img`
    width: 10rem;
    transform: scale(.5);
    animation: ${scale} 1s alternate infinite;
`;

const InfoDetail = styled.div`
    color: gray;
`;

const InfoDetailTitle = styled.div`
        margin-top: 10px;
        margin-bottom: 20px;
        color: #41b883;
        font-weight: bold;
        font-size: 1.2rem;
`;

const InfoDetailText = styled.div`
        margin: 5px 0;
`;

const SourceLink = styled.div`
      margin: 25px 0;
`;

const BackButton = styled.button`
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 20px 0;
      padding: 5px 10px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
      transition: .3s;
      &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
      }
`;

const Info = ({changeMenu}) => {

    return (
        <Information>
            <InfoWrapper>
                <InfoLogo src="Images/Mario.jpg" />
                <InfoDetail>
                    <InfoDetailTitle>React.js Protfolio</InfoDetailTitle>
                    <InfoDetailText>
                        Developer : <b>YHT</b>
                    </InfoDetailText>
                    <InfoDetailText>
                        Development end date : <b>2019/05/25</b>
                    </InfoDetailText>
                    <InfoDetailText>
                        Languages : React With hooks
                    </InfoDetailText>
                    <InfoDetailText>
                        <SourceLink>
                        Source code: <a href="https://github.com/yht0827">Github</a>
                        </SourceLink>
                    </InfoDetailText>
                </InfoDetail>
                <BackButton onClick={() => changeMenu(false)}>Back</BackButton>
            </InfoWrapper>
        </Information>
    );
};

export default Info;
