import styled, { keyframes } from "styled-components";

import { siteColors } from "../../style";

const { principalContent } = siteColors;

const animacaoCard = keyframes`

    from{transform: translateY(30px);opacity:0}
    to{transform: translateY(0px);opacity:1}
`;

export const ContainerCard = styled.div`
  background: #fff;
  width: 200px;
  height: 270px;
  box-shadow: 0 0 1px #ccc;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: 0.6s ${animacaoCard} ease-in-out;
  transition: 0.3s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #ddd;
  }

  img {
    max-width: 28%;
    border-radius: 50%;
  }

  div {
    transform: translateY(0px);

    h1 {
      color: ${principalContent.primary};
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: 1px;
    }

    span {
      display: block;
      margin-top: 0.2rem;
      color: #bbb;
      font-size: 0.8rem;
    }
  }

  p {
    color: #aaa;
    font-weight: 400;
    font-size: 0.9rem;
  }
`;
