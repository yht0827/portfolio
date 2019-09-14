import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import {startmenu } from "./data";
import * as LangActions from "redux/modules/Lang";

const TaskBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    bottom: 0;
`;

const MenuButton = styled.button`
      cursor: pointer;
      width: 80px;
      height: 100%;
      color: #fff;
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 1rem;
      background-color: rgba(0, 0, 0, .2);
      &:hover {
        background-color: rgba(0, 0, 0, .4);
      }
`;

const MenuImg = styled.img`
        width: 45px;
        height: 45px;
`;

const MenuTime = styled.div`
      width: 90px;
      height: 100%;
      color: #fff;
      line-height: 50px;
      text-align: center;
      font-size: 1rem;
      float: right;
      background-color: rgba(0, 0, 0, .2);
`;

const StartMenu = styled.div`
    position: absolute;
    left: 0;
    bottom: 50px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    text-align: center;
    transition: opacity 0.5s;

    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 1;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
    }

    @media only screen and (min-width: 320px), (min-width: 768px) {
      border-radius: 0;
      height: 100%;
      width: 100%;
    }
    @media only screen and (min-width: 1224px) {
      width: 25rem;
      height: 40rem;
      border-top-right-radius: 10px;
    }
`;

const PowerImg = styled.img`
    cursor: pointer;
    margin-bottom: 2rem;
    border-radius: 50%;
    transition: .3s;

    @media only screen and (min-width: 320px), (min-width: 768px) {
        margin-top: 50%;
      }
      @media only screen and (min-width: 1224px) {
        margin-top: 40%;
      }
      &:hover {
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
                transform: scale(1.1);
      }
`;

const PowerOffText = styled.div`
    display: block;
`;

const LanguageButtonArea = styled.div``;

const LanguageText = styled.div`
        color: #fff;
        margin-bottom: 16px;
`;

const LanguageButton = styled.button`
        cursor: pointer;
        outline: none;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 2px 6px;
        color: #fff;
        background-color: transparent;
                transition: $transition-duration;
        &:hover {
          box-shadow: 0px 0px 10px rgba(255, 255, 255, .5);
        }
`;

const UnderBar = ({changeLog}) => {
    const [openMenu, setMenu] = useState(false);
    const [date, setDate] = useState(new Date());
    const Lang = useSelector(state => state.Lang.lang);
    const [items, setItems] = useState(startmenu[Lang]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const Timer = setInterval(() => tick(),900);
        return function Cleanup() { clearInterval(Timer); }
    });

    const changeAction = () => {
        openMenu ? setMenu(false) : setMenu(true);
    }

    const tick = () => {
        setDate(new Date());
    };

    const changeLang = () => {
        if(Lang === "kr"){
            dispatch(LangActions.changeLang({lang:"en"}));
            setItems(startmenu.en);
        }else if(Lang === "en"){
            dispatch(LangActions.changeLang({lang:"kr"}));
            setItems(startmenu.kr);
        }
    };

    const getAP = (lang) => {
        if(lang === "en"){
          return date.getHours() < 12 ? "AM" : "PM"
        }else if(lang === "kr"){
          return date.getHours() < 12 ? "오전" : "오후"
        }
      };

    return (
    <>
        <TaskBar>
            <MenuButton onClick={changeAction}>
                <MenuImg src="Images/window.png" />
            </MenuButton>
            <MenuTime>
                {Lang=== "kr" && getAP(Lang)}&nbsp;
                {date.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}&nbsp;
                {Lang=== "en" && getAP(Lang)}
            </MenuTime>
        </TaskBar>
        <CSSTransition in={openMenu} classNames="fade" timeout={300} unmountOnExit>
            <StartMenu>
                <PowerImg src="Images/poweroff.png" onClick={() => changeLog()} />
                <PowerOffText>{items.power}</PowerOffText>
                <LanguageButtonArea>
                    <LanguageText>{items.langtext}</LanguageText>
                    <LanguageButton onClick={() => changeLang()}>{items.lang}</LanguageButton>
                </LanguageButtonArea>
            </StartMenu>
        </CSSTransition>
    </>
    );
};

export default UnderBar;
