import styled, { createGlobalStyle } from "styled-components";

export const siteColors = {
  menuLbg: {
    bg1: "#F9A2A4",
    bg2: "#E76886",
    colorFont: "#fff",
  },

  principalContent: {
    bg1: "#FAFAFC",
    bg2: "#E1E4EB",
    headerTitle: "#555",
    lightgray: "#D7DBE4",
    primary: "#E76886",
  },
};

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        cursor:context-menu;
        font-family: "Roboto";
    
    }

    body{
        height:100vh;
    }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 32% 1fr;
`;
