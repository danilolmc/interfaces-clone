import styled from "styled-components";

import { siteColors } from "../../style";

const { principalContent } = siteColors;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-of-type {
    text-align: left;

    h1 {
      color: ${principalContent.headerTitle};
      font-size: 1.3rem;
    }

    span {
      color: #ccc;
      font-weight: 400;
      font-size: 0.7rem;
      margin-top: 12px;
      display: block;
    }
  }

  div:last-of-type {
    text-align: right;

    h1 {
      color: ${principalContent.headerTitle};
      font-size: 1.3rem;
      margin-top: 12px;
      text-transform: uppercase;
      color: ${principalContent.primary};
      letter-spacing: 1px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    span {
      color: ${principalContent.headerTitle};
      font-weight: 500;
      font-size: 0.7rem;
      display: block;
    }
  }
`;
