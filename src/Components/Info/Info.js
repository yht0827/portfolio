import React from "react";
import styled from "styled-components";
import { useStore } from "react-redux";
import { scale } from "Components/Common/Keyframe";
import { infos } from "Components/Main/data";

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
      padding-top: 30%;
    }
    @media only screen and (min-width: 768px) {
      padding-top: 5%;
    }
    @media only screen and (min-width: 1224px) {
      padding-top: 130px;
    }
`;

const InfoLogo = styled.img`
    width: 20rem;
    transform: scale(.5);
    animation: ${scale} 1s alternate infinite;
`;

const InfoDetail = styled.div`
    color: gray;
`;

const InfoDetailTitle = styled.div`
        margin-top: 10px;
        margin-bottom: 20px;
        color: #60D9FA;
        font-weight: bold;
        font-size: 2rem;
`;

const InfoDetailText = styled.div`
        margin: 5px 0;
        font-size: 1rem;
        color : #4b6584;
`;

const SourceLink = styled.div`
      margin: 25px 0;
      font-size: 1rem;
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

    const Lang = useStore().getState().Lang.lang;

    return (
        <Information>
            <InfoWrapper>
                <InfoLogo src="Images/react.png" loading="lazy" />
                <InfoDetail>
                    <InfoDetailTitle>{infos[Lang]["title"]}</InfoDetailTitle>
                    <InfoDetailText>
                    {infos[Lang]["developer"]}<b>{infos[Lang]["name"]}</b>
                    </InfoDetailText>
                    <InfoDetailText>
                    {infos[Lang]["enddate"]}<b>2019/05/25</b>
                    </InfoDetailText>
                    <InfoDetailText>
                    {infos[Lang]["language"]}
                    </InfoDetailText>
                    <InfoDetailText>
                        <SourceLink>
                        {infos[Lang]["source"]} <a href="https://github.com/yht0827/portfolio">{infos[Lang]["github"]}</a>
                        </SourceLink>
                    </InfoDetailText>
                </InfoDetail>
                <BackButton onClick={() => changeMenu(false)}>{infos[Lang]["back"]}</BackButton>
            </InfoWrapper>
        </Information>
    );
};

export default Info;
