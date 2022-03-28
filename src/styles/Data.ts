import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;

export const DataTitle = styled.h2`
  color: var(--data-color);
  font-size: 24px;
  margin-bottom: 6px;
`;

export const DataSubtitle = styled.h3`
  color: var(--info-color);
  font-family: var(--info-font);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
