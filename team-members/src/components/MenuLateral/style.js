import styled from "styled-components";

import { siteColors } from "../../style";

const { menuLbg } = siteColors;

export const Container = styled.div`
  background: linear-gradient(to top, ${menuLbg.bg2}, ${menuLbg.bg1});
  height: 100%;
  padding: 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: sans-serif;

  ul {
    list-style: none;
    transform: translatex(17px);

    li {
      opacity: 0.5;
      display: flex;
      margin: 0 0 2rem 0;
      align-items: center;

      transition: 0.3s ease-in-out;

      &:hover {
        opacity: 1;
      }

      svg {
        fill: ${menuLbg.colorFont};
        font-size: 1.3rem;
      }
    }
  }

  a {
    text-decoration: none;
    font-size: 0.7rem;
    margin-left: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${menuLbg.colorFont};
    text-transform: uppercase;
    cursor: pointer;
  }

  footer {
    transform: translatex(17px);

    div {
      opacity: 0.5;
      display: flex;
      align-items: center;
      transition: 0.3s ease-in-out;

      &:hover {
        opacity: 1;
      }

      svg {
        color: ${menuLbg.colorFont};
        font-size: 1.3rem;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  max-width: 80%;

  img {
    border-radius: 50%;
    max-width: 33%;
    filter: grayscale(1);
  }

  div {
    margin-left: 1.5rem;

    * {
      color: ${menuLbg.colorFont};
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
    }

    button {
      background: none;
      border: 0;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        font-weight: 600;
      }
    }
  }
`;
