import React, { useState } from "react";
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

    const [command,setcommand] = useState("");
    const [CommandArr,setArr] = useState([]);

    const handleChange = e => {
        setcommand(e.target.value);
    };

    const commandExec = (value) => {
        const command = value.toLowerCase();
        setArr(CommandArr => [...CommandArr,{command:command,
            result:[`${command}: Command Not found`],
       }]);
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
                     <div key={index}>    
                    <Command>
                        <CommandUser>HT@ubuntu</CommandUser>:~$&nbsp;{com.command}
                    </Command>
                    {  com.result.map((result,subindex) =>
                       <p key={subindex}>{result}</p>)}
                    </div>
                    );
                    })}
                    <Command>
                        <CommandUser>HT@ubuntu</CommandUser>:~$&nbsp;
                        <CommandInput autoFocus type="text" value={command} onChange={event => handleChange(event)} onKeyPress={event => handleKey(event)} />
                    </Command>
            </CommandArea>
        </TerminalWrapper>
    );
};

export default Terminal;
