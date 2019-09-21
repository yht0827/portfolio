import React from "react";
import styled from "styled-components";
import { useStore } from "react-redux";
import { projects } from "Components/Main/data";

const ItemWrapper = styled.div`
width: 90%;
margin: 20px auto;
padding: 20px 0;
background-color: #fff;
border-radius: 20px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const ItemTitle = styled.div`
margin: 10px 0;
font-size: 1.5rem;
font-weight: bold;
color: dodgerblue;
`;

const ItemMoreButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);

    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    }
`;

const ItemImage = styled.img`
        border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    @media only screen and (min-width: 320px), (max-width: 768px) {
      width: 80%;
      height: 50%;
    }
    @media only screen and (min-width: 1224px) {
      width: 50%;
      height: 30%;
    }
`;

const ItemInfo = styled.div`
    margin: 10px 0px;
`;
const ItemInfoText = styled.div`
    padding: 5px;
`;
const ItemInfoTextColor = styled.b`
    color: ${props=> props.color};
    font-size: 23px;
`;

const ItemUsedLang = styled.div`
    padding: 0;
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: yellowgreen;
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
                <ItemImage src={project.img} />
                <ItemUsedLang >{project.lang}</ItemUsedLang>
                <ItemInfo>
                  <ItemInfoTextColor color="sandybrown">{Lang === "en"? "Information":"정보"}</ItemInfoTextColor>  
                    { project.infotext.map((text,subindex) => <ItemInfoText key={subindex}>{text}</ItemInfoText>)}
                </ItemInfo>
                <ItemInfo>
                  <ItemInfoTextColor color="indianred">{Lang === "en"? "Date":"날짜"}</ItemInfoTextColor>  
                  <ItemInfoText>{project.year}</ItemInfoText>
                </ItemInfo> 
                <ItemMoreButton onClick={() => showPage(project.showpage)}>{Lang === "en"? "more":"더보기"}</ItemMoreButton>
            </ItemWrapper>)
    )
};

export default Item;
