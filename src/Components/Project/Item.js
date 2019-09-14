import React from "react";
import styled from "styled-components";

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
`;

const ItemUsedLang = styled.div`
    padding: 0;
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: gray;
`;

const Item = () => {
    const showPage = (url) => {
      window.open(url);
  };

  return(
      <ItemWrapper>
        <ItemTitle>BitMiner</ItemTitle>
        <ItemImage src="Images/Mario.jpg" />
        <ItemUsedLang >JavaScript</ItemUsedLang>
        <ItemInfo>
        <ItemInfoTextColor color="dodgerblue">Information</ItemInfoTextColor>  
        <ItemInfoText>Electron + Vue.js based game</ItemInfoText>
        <ItemInfoText>Cross platform game!</ItemInfoText>
        </ItemInfo>
        <ItemInfo>
        <ItemInfoTextColor color="dodgerblue">date</ItemInfoTextColor>  
        <ItemInfoText>2019</ItemInfoText>
        </ItemInfo> 
        <ItemMoreButton onClick={() => showPage("https://www.google.com")}>more</ItemMoreButton>
      </ItemWrapper>
    )
};

export default Item;
