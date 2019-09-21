import React from "react";
import styled from "styled-components";
import { useStore } from "react-redux";
import { bounce } from "Components/Common/Keyframe";
import { profiles } from "Components/Main/data";

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
    width: 150px;
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    @media only screen and (min-width: 320px) {
      margin-top: 10%;
    }
    @media only screen and (min-width: 768px) {
      margin-top: 8%;
    }
    @media only screen and (min-width: 1224px) {
      margin-top: 60px;
    }
`;

const ProfileName = styled.div`
    margin-top: 5px;
    font-size: 1rem;
    font-weight: bold;
`;

const ProfileBirth = styled.div`
    margin-top: 5px;
    font-size: .8rem;
`;

const ProfileMotto = styled.div`
    margin-top: 15px;
    font-size: 1rem;
    font-weight: bold;
    color: gray;
    animation: ${bounce} 1s alternate infinite;
`;

const ContentWrapper = styled.div`
    margin-top: 1.2rem;
`;

const ContentTitle = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3px;
    color: ${props => props.color};
`;

const ContentText = styled.div`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1rem;
    color: ${props => props.color};
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

    const Lang = useStore().getState().Lang.lang;

    return (
        <About>
            <ProfileImg src="Images/Mario.jpg" />
            <ProfileName>{profiles[Lang]["name"]}</ProfileName>
            <ProfileBirth>{profiles[Lang]["birth"]}</ProfileBirth>
            <ProfileMotto>{profiles[Lang]["motto"]}</ProfileMotto>
            <ContentWrapper>
                <ContentTitle color="#e55039">{profiles[Lang]["grade"]}</ContentTitle>
                <ContentText color="#8395a7">{profiles[Lang]["uni"]}</ContentText>
            </ContentWrapper>
            <ContentWrapper>
                <ContentTitle color="#fa983a">{profiles[Lang]["major"]}</ContentTitle>
                { profiles[Lang].majors.map((major,index) => <ContentText key={index} color="#8395a7">{major}</ContentText>)}
            </ContentWrapper>
            <ContentWrapper>
                <ContentTitle color="#10ac84">{profiles[Lang]["certificate"]}</ContentTitle>
                { profiles[Lang].certificates.map((cert,index) => <ContentText key={index} color="#8395a7">{cert}</ContentText> )}
            </ContentWrapper>
            <BackButton onClick={() => changeMenu(false)}>Back</BackButton>
        </About>
    );
};

export default AboutMe;
