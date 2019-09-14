import React, { useState } from "react";
import styled from "styled-components";
import commandCheck from "Components/Terminal/commandCheck";

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

const CommandWrapper = styled.div`
`;

const Command = styled.div`
    font-size: 19px;
`;

const CommandResult = styled.pre`
    color: ${props => props.command === "ls" && "#3498db"};
    font-style: ${props => props.command === "ls" && "italic"};
    font-family: ${props => (props.command === "ls -al" || props.command === "ls -l" || props.command === "ll")  && "monospace"};
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

const Terminal = ({changeMenu}) => {

    const [command,setcommand] = useState("");
    const [CommandArr,setArr] = useState([]);

    const handleChange = e => {
        setcommand(e.target.value);
    };

    const commandExec = (value) => {
        const command = value.toLowerCase();
        if(command === "clear"){
            setArr([]);
        }else if(command === "exit"){
            changeMenu(false);
        }else{
            const result = commandCheck(command);
            setArr(CommandArr => [...CommandArr,result]);
        }
       setcommand("");
    };

    const handleKey = e => {
        if(e.charCode === 13){
         commandExec(command);
        }
    };
    
    return (
        <TerminalWrapper>
            <CommandArea>
               {CommandArr.map((com,index) => {
                 return (    
                     <CommandWrapper key={index}>    
                    <Command>
                        <CommandUser>HT@ubuntu</CommandUser>:~$&nbsp;{com.command}
                    </Command>
                    {  com.result.map((result,subindex) =>
                       <CommandResult command={com.command} key={subindex}>{result}</CommandResult>)}
                    </CommandWrapper>
                    );
                    }
                    )
                }
                    <Command>
                        <CommandUser>HT@ubuntu</CommandUser>:~$&nbsp;
                        <CommandInput autoFocus type="text" value={command} onChange={event => handleChange(event)} onKeyPress={event => handleKey(event)} />
                    </Command>
            </CommandArea>
        </TerminalWrapper>
    );
};

export default Terminal;
