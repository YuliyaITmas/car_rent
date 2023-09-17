import React from "react";
import { Container } from "./Sidebar.styled";
import { SidebarData } from "./SidebarData";

export const Sidebar = () => {
  return (
    <Container>
      <ul>
        {SidebarData.map((value, key) => {
          return (
            <li key={key} onClick={()=>{window.location.pathname = value.link}}>
              <div>{value.icon}</div>
              <div>{value.title}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
