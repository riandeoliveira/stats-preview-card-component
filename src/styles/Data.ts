import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-right: 60px;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const DataTitle = styled.h2`
  color: var(--santas-gray-color);
  font-family: var(--info-font);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const DataSubtitle = styled.h3`
  color: var(--white-color);
  font-size: 24px;
  margin-bottom: 6px;
`;
