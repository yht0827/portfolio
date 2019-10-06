import React from "react";
import styled from "styled-components";
import { useStore } from "react-redux";
import { projects } from "Components/Main/data";

const ItemWrapper = styled.div`
width: 90%;
margin: 20px auto;
padding: 20px 0;
background-color: #ffeaa7;
border-radius: 20px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const ItemTitle = styled.div`
margin: 10px 0;
font-size: 2.5rem;
font-weight: bold;
color: dodgerblue;
@media only screen and (min-width: 320px), (max-width: 768px) {
        font-size: 1.8rem;
    }
    @media only screen and (min-width: 1224px) {
        font-size: 2.5rem;
    }
`;

const ItemMoreButton = styled.button`
    cursor: pointer;
    outline: none;
    border: 1px solid #0984e3;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
    font-weight: bold;
    background-color: transparent;
    color: #0984e3;
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    }
`;
const ItemFrame = styled.div`
    @media only screen and (min-width: 320px), (max-width: 768px) {
      width: 100%;
      min-height: 14rem;
    }
    @media only screen and (min-width: 1224px) {
      width: 100%;
      min-height: 22.5rem;
    }
`;

const ItemImage = styled.img`
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    @media only screen and (min-width: 320px), (max-width: 768px) {
      width: 80%;
    }
    @media only screen and (min-width: 1224px) {
      width: 80%;
    }
`;

const ItemInfo = styled.div`
    margin: 10px 0px;
`;
const ItemInfoText = styled.div`
    margin-top: 2px;
    padding: 5px;
    font-weight: bold;
`;
const ItemDate = styled.div`
    padding: 5px;
    color: ${props=> props.color};
    font-weight: bold;
`;
const ItemInfoTextColor = styled.b`
    color: ${props=> props.color};
    font-size: 1.2rem;
    font-weight: bold;
`;

const ItemUsedLang = styled.div`
    padding: 0;
    margin: 10px 0;
    font-size: 1.3rem;
    font-weight: bold;
    color: #8e44ad;
    @media only screen and (min-width: 320px), (max-width: 768px) {
        font-size: 1rem;
    }
    @media only screen and (min-width: 1224px) {
        font-size: 1.3rem;
    }
`;

const Item = () => {
  const Lang = useStore().getState().Lang.lang;
  const showPage = (url) => {
      window.open(url);
  };

  return(
        projects[Lang]["projects"].map((project, index)=>
            <ItemWrapper key={index}>
                <ItemTitle>{project.title}</ItemTitle>
                <ItemFrame>
                    <ItemImage src={project.img} loading="lazy" />
                </ItemFrame>
                <ItemUsedLang >{project.lang}</ItemUsedLang>
                <ItemInfo>
                  <ItemInfoTextColor color="#2ecc71">{Lang === "en"? "Information":"정보"}</ItemInfoTextColor>  
                    { project.infotext.map((text,subindex) => <ItemInfoText key={subindex}>{text}</ItemInfoText>)}
                </ItemInfo>
                <ItemInfo>
                  <ItemInfoTextColor color="#e74c3c">{Lang === "en"? "Date":"날짜"}</ItemInfoTextColor>  
                  <ItemDate color="#2980b9">{project.year}</ItemDate>
                </ItemInfo> 
                <ItemMoreButton onClick={() => showPage(project.showpage)}>{Lang === "en"? "More":"더보기"}</ItemMoreButton>
            </ItemWrapper>)
    )
};

export default Item;
