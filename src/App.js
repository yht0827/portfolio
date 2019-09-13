import React,{ useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from "Components/Common";
import styled from "styled-components";
import { Icon, UnderBar } from "Components/Main"
import { Helmet } from "react-helmet";
import { Loginmenu } from "Components/Main/data";
import * as LangActions from "redux/modules/Lang";
import { bounce } from "Components/Common/Keyframe";
import FadeIn from "react-fade-in";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  font-family: "NanumSquareRound";
  background: url("Images/background.jpg") center;
  background-size: cover;
`;

const Main = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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

const Desktop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    overflow-y: auto;
`;

const Login = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

const UserProfile = styled.div`
    width: 100%;
    text-align: center;
    @media only screen and (min-width: 320px), (min-width: 768px) {
      margin-top: 25%;
    }
    @media only screen and (min-width: 1224px) {
      margin-top: 10%;
    }
`;

const ProfileImg = styled.img`
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 3px solid #fff;
      background-color: #fff;
`;

const ProfileName = styled.p`
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
`;

const ButtonArea = styled.div`
    margin: auto;
    margin-top: 30px;
    text-align: center;
`;

const StyledButton = styled.button`
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      color: #fff;
      font-weight: bold;
      padding: 10px 20px;
      transition: 0.3s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #eee;
      }
`;

const LoginMessage = styled.div`
      width: 100%;
      font-weight: bold;
      font-size: 2rem;
      color: #fff;
      text-align: center;
`;

const LangMessage = styled.div`
      width: 100%;
      font-weight: bold;
      font-size: 1.3rem;
      color: #fff;
      text-align: center;
      animation: ${bounce} 1s alternate infinite;
      margin-bottom: 5px;
`;

const TimeArea = styled.div`
    position: absolute;
    bottom: 0;
    margin: 20px;
    color: #fff;
`;

const Timer = styled.div`
    font-weight: bold;
    @media only screen and (min-width: 320px) {
        font-size: 2.5rem;
      }
      @media only screen and (min-width: 768px), (min-width: 1224px) {
        font-size: 4rem;
      }
`;

const TimeAP = styled.b`
        font-size: 1.5rem;
`;

const DateArea = styled.div`
      @media only screen and (min-width: 320px) {
        font-size: 1rem;
      }
      @media only screen and (min-width: 768px), (min-width: 1224px) {
        font-size: 1.5rem;
      }
`;

const App = () => {
    const [date, setDate] = useState(new Date());
    const [clickBt,setBt] = useState(false);
    const Lang = useSelector(state => state.Lang.lang);
    const isLogged = useSelector(state => state.Lang.isLogged);
    const dispatch = useDispatch();
    
    const changeLog = () => {
      if(isLogged){
        setBt(false);
        setTimeout(() => dispatch(LangActions.changeLog({isLogged:false})),2000);
      }else{
        setBt(true);
        setTimeout(() => dispatch(LangActions.changeLog({isLogged:true})),2500);
      }
    };

    const getDate = (lang) => {
      if(lang === "en"){
        return `${Loginmenu.en.day[date.getDay()]}, ${date.getDate()} ${Loginmenu.en.month[date.getMonth()]}`;
      }else{
        return `${Loginmenu.kr.month[date.getMonth()]} ${date.getDate()}일 ${Loginmenu.kr.day[date.getDay()]}`;
      }
    };

    const getAP = (lang) => {
      if(lang === "en"){
        return date.getHours() < 12 ? "AM" : "PM"
      }else if(lang === "kr"){
        return date.getHours() < 12 ? "오전" : "오후"
      }
    };

    const tick = () => {
      setDate(new Date());
    };

    const ChangeLang = () => {
      if(Lang === "en"){
        dispatch(LangActions.changeLang({lang:"kr"}));
        getDate("kr");
        getAP("kr");
        setDate(new Date());
      }else if(Lang === "kr"){
        dispatch(LangActions.changeLang({lang:"en"}));
        getDate("en");
        getAP("en");
        setDate(new Date());
      }     
};

  useEffect(() => {
    const Timer = setInterval(() => tick(),900);
    return function Cleanup() { clearInterval(Timer); }
  });
  
    return (
    <>
    <Helmet>
         <title>Portfolio</title>
    </Helmet>
    <Background>
      <FadeIn delay={300} transitionDuration={700}>
                  <Main>
        { isLogged ?
              <>
                    <Desktop>
                      <Icon />
                    </Desktop>
                    <UnderBar changeLog={changeLog} />
              </>
                :
              <Login>
                  <UserProfile>
                      <ProfileImg src="Images/Mario.jpg" />
                      <ProfileName>{Loginmenu[Lang].name}</ProfileName>
                  </UserProfile>
                  <ButtonArea>
                 { clickBt ? <LoginMessage>{Loginmenu[Lang].hello}</LoginMessage>
                   : <StyledButton onClick={() => changeLog()}>{Loginmenu[Lang].login}</StyledButton> 
                 }
                  </ButtonArea>
                   <ButtonArea>
                      <LangMessage onClick={() => ChangeLang()}>{Loginmenu[Lang].langtext}</LangMessage>
                   </ButtonArea>
                  <TimeArea>
                      <Timer>
                          {date.toLocaleTimeString("en-US", { hour12: false })}
                          <TimeAP>{getAP(Lang)}</TimeAP>
                      </Timer>
                      <DateArea>{getDate(Lang)}</DateArea>
                  </TimeArea>
              </Login>
            }
            </Main>
            </FadeIn>
      <GlobalStyle />
    </Background>
    </>
    )
};

export default App;
