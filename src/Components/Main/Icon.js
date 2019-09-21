import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Window from "Components/Main/Window";
import { folders } from "Components/Main/data";

const IconArea = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
`;

const IconWraper = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-width: 30rem;
        padding: 1rem;
`;

const IconContent = styled.div`
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`; 

const IconImg = styled.img`
    width: 4rem;
    height: 4rem;
`;

const IconName = styled.div`
    color: #fff;
    text-shadow: 1px 1px 2px #000;
`;

const CSSWrapper = styled.div`
        transition: opacity 0.5s;
        &.show-enter {
            opacity: 0;
        }
        &.show-enter-active {
            opacity: 1;
        }
        &.show-exit {
            opacity: 1;
        }
        &.show-exit-active {
            opacity: 0;
        }
`;

const Icon = () => {
    const [index,setindex] = useState(0);
    const [openMenu,setMenu] = useState(false);
    const Lang = useStore().getState().Lang.lang;

    const changeAction = (index) => {
      
        setindex(index);

        if(index === 3){
            window.open("https://github.com/yht0827");
        }else if(index === 4){
            window.open("mailto:yangheetae0827@naver.com");
        }else{
            openMenu? setMenu(false): setMenu(true);
        }
    };

    const changeMenu = (value) => {
        setMenu(value);
    }

    return (
    <>
    <IconArea>
        <IconWraper>
            { folders.map((folder, index) => 
                    <IconContent key={index} onClick={() => changeAction(index)}>
                        <IconImg src={folder.image} />
                        <IconName>{folder[Lang+"-name"]}</IconName>
                    </IconContent>
                )
            }
        </IconWraper>
    </IconArea>
        <CSSTransition in={openMenu} classNames="show" timeout={500} unmountOnExit>
        <CSSWrapper><Window index={index} changeMenu={changeMenu} Lang={Lang} /></CSSWrapper>
        </CSSTransition>
    </>
)};

export default Icon;
