import React from "react";
import styled from "styled-components";

const TerminalWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: rgba(48, 10, 36, 1);
    border-radius: 0px 0px 5px 5px;
    overflow-y: auto;
`;

const CommandArea = styled.div`
    padding: 0 5px;
    color: #fff;
`;

const Command = styled.div`
    font-size: 19px;
`;

const CommandUser = styled.b`
      color: lawngreen;
`;

const CommandInput = styled.input`
        width: 50%;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        font-size: 1rem;
        padding: 2px 5px;
`;

const Terminal = () => {

    return (
        <TerminalWrapper>
            <CommandArea>
                <Command>
                    <CommandUser>HT@ubuntu</CommandUser>:~$&nbsp;
                    <CommandInput />
                </Command>
            </CommandArea>
        </TerminalWrapper>
    );
};

export default Terminal;
