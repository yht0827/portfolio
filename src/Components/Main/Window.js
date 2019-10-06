import React from "react";
import styled from "styled-components";
import { Project } from "Components/Project";
import { Terminal } from "Components/Terminal";
import { Chrome } from "Components/Chrome";
import { Info } from "Components/Info";
import { AboutMe } from "Components/AboutMe";
import { folders } from "Components/Main/data";

const WindowWrapper = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  margin: auto;
  width: 45rem;
  height: 40rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s;
  &.fade-enter{
      opacity: 0;
  }
  &.fade-enter-active{
      opacity: 1;
  }
  &.fade-exit {
      opacity: 1;
  }
  &.fade-exit-active {
      opacity: 0;
  }

  @media only screen and (min-width: 320px) {
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 80px);
    -webkit-transform: none;
       -moz-transform: none;
        -ms-transform: none;
         -o-transform: none;
            transform: none;
  }
  @media only screen and (min-width: 768px) {
    width: 65%;
    height: 70%;
    top: calc(50% - 50px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 1224px) {
    width: 45rem;
    height: 40rem;
    top: calc(50% - 50px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    border-radius: 5px 5px 0 0;
    background-color: #546e7a;
`;

const CloseButton = styled.span`
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin-top: 6px;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 50%;
    color: #860003;
    background-color: #FC3C3F;
    text-align: center;
    line-height: 16px;
`;

const Button = styled.span`
    width: 14px;
    height: 14px;
    margin-top: 6px;
    margin-right: 4px;
    border-radius: 50%;
    background-color: ${props => props.color};
    text-align: center;
    line-height: 16px;
`;

const TitleContent = styled.div`
    height: 100%;
    line-height: 30px;
    color: #dbdee0;
    font-weight: bold;

    @media only screen and (min-width: 320px) {
        margin-left: 35%;  
    }

    @media only screen and (min-width: 768px) {
        margin-left: 40%;
    }

    @media only screen and (min-width: 1224px) {
        margin-left: 40%;
    }

`;

const Window = ({ changeMenu, index, Lang }) => (
      <WindowWrapper>
                <Title>
                <CloseButton onClick={() => changeMenu(false)} />
                <Button color="#FEB525"/>
                <Button color="#2AC933"/>
                <TitleContent>{folders[index][Lang+"-name"]}</TitleContent>
              </Title>
              {index === 0 && <Project />}
              {index === 1 && <AboutMe changeMenu={changeMenu} />}
              {index === 2 && <Terminal changeMenu={changeMenu} />}
              {index === 4 && <Chrome />}
              {index === 7 && <Info changeMenu={changeMenu} />}
      </WindowWrapper>
);

export default Window;
