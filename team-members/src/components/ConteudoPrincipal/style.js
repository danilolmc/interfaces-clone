import styled from "styled-components";

import { siteColors } from "../../style";

const { principalContent } = siteColors;

export const Container = styled.div`
  padding: 5rem 3.5rem;
  background: linear-gradient(
    to right,
    ${principalContent.bg1},
    ${principalContent.bg2}
  );

  &::-webkit-scrollbar {
    background: #eee;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${principalContent.primary};
    width: 10px;
  }

  overflow-y: scroll;

  section {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 0.7rem;
    row-gap: 1.2rem;
    justify-content: space-between;
    max-width: 100%;
  }
`;
