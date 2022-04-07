import styled from "styled-components";
import theme from "./theme/theme.json";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-right: 60px;
`;

export const InfoName = styled.h2`
  color: ${theme.colors.santas_gray};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const InfoNumber = styled.h3`
  color: ${theme.colors.white};
  font-size: 24px;
  margin-bottom: 6px;
`;
