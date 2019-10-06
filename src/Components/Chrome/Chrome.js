import React, { useState } from "react";
import { useStore } from "react-redux";
import styled from "styled-components";

const Browser = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 5px 5px;
    background-color: #fff;
    overflow: hidden;
`;

const BrowserTop = styled.div`
    display: flex;
    width: 100%;
    height: 6%;
    background-color: #eee;
    border-bottom: 1px solid gray;
`;

const BrowserAddressBar = styled.input`
        width: 100%;
        height: 60%;
        padding: 5px 10px;
        margin: 7px 5px;
        border-radius: 5px;
        border: 1px solid ;
        font-weight: bold;
        font-size: 0.83rem;
        background-color: #ecf0f1;
        color: #2f3640;
`;

const ImageArea = styled.div`
    width: 100%;
    background-color: #fff;
    text-align: center;
`;

const GoogleImage = styled.img`
      width: 20rem;
      margin: 7rem 0 3rem 0;
`;

const SearchArea = styled.div`
    text-align: center;
`;

const SearchInput = styled.input`
        border: 1px solid lightgray;
        border-radius: 24px;
        outline: none;
        text-align: left;
        padding-left: 35px;
        width: 27rem;
        height: 2rem;
        font-size : 0.9rem;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
        transition: $transition-duration;
        &:focus, &:hover {
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .4);
        }
`;

const ButtonArea = styled.div`
    margin-top: 25px;
    text-align: center;
`;

const ChromeButton = styled.button`
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
    color: #5F6368;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 4px;
    min-width: 135px;
    height: 36px;
    cursor: pointer;
    padding: 0 16px;
    margin: 11px 4px;
    &:hover {
            border: 1px solid #95a5a6;
            color: #3d3d3d;
        }
`;

const Chrome = () => {

    const [search,setsearch] = useState("");
    const Lang = useStore().getState().Lang.lang;

    const handleChange = e => {
        setsearch(e.target.value);
    };

    const onSearch = () => {
        if(search){
            window.open('https://google.com/search?q=' + search);
        }
        setsearch("");
    };

    const handleKey = e => {
        if(e.charCode === 13){
            onSearch();
        }
    };

    return (
        <Browser>
            <BrowserTop>
                <BrowserAddressBar type="text" value="www.google.com" disabled />
            </BrowserTop>
            <ImageArea>
                <GoogleImage src="Images/google.png" />
            </ImageArea>
            <SearchArea>
                <SearchInput autoFocus type="text" value={search} onChange={event => handleChange(event)} onKeyPress={event => handleKey(event)}  />
            </SearchArea>
            <ButtonArea>
                <ChromeButton onClick={() => onSearch()}>
                    {Lang === "en" ? "Google Search" : "구글 검색"}
                </ChromeButton>
                <ChromeButton>
                    I'm Feeling Lucky
                </ChromeButton>
            </ButtonArea>
        </Browser>
    );
}

export default Chrome;
