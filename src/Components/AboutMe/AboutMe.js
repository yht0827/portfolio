import React from "react";
import styled from "styled-components";
import { bounce } from "Components/Common/Keyframe";

const About = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  background-color: #eee;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ProfileImg = styled.img`
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    @media only screen and (min-width: 320px) {
      margin-top: 12%;
    }
    @media only screen and (min-width: 768px) {
      margin-top: 14%;
    }
    @media only screen and (min-width: 1224px) {
      margin-top: 26px;
    }
`;

const ProfileName = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

const ProfileBirth = styled.div`
    margin-top: 5px;
    font-size: .8rem;
`;

const ProfileMotto = styled.div`
    margin-top: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: gray;
    animation: ${bounce} 1s alternate infinite;
`;

const ContentWrapper = styled.div`
    margin-top: 3rem;
`;

const ContentTitle = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
`;

const ContentText = styled.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1.1rem;
    color: gray;
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

const AboutMe = ({changeMenu}) => {

    return (
        <About>
            <ProfileImg src="Images/Mario.jpg" />
            <ProfileName>YangHeeTae</ProfileName>
            <ProfileBirth>Birthday 1992.08.27</ProfileBirth>
            <ProfileMotto>Motto: Don't Give up</ProfileMotto>
            <ContentWrapper>
                <ContentTitle>학력</ContentTitle>
                <ContentText>가톨릭대학교</ContentText>
                <ContentText>인창고등학교</ContentText>
            </ContentWrapper>
            <BackButton onClick={() => changeMenu(false)}>Back</BackButton>
        </About>
    );
};

export default AboutMe;
