import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Content = styled.div`
position: absolute;
top: 30px;
bottom: 0;
left: 0;
right: 0;
overflow-y: auto;
`;

const ProjectView = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
`;

const Project = () => {

   return(
            <Content>
                <ProjectView>
                    <Item />
                </ProjectView>
            </Content>
    )
};

export default Project;
