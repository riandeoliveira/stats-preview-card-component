import styled from "styled-components";
import theme from "./theme/theme.json";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 20px;
`;

export const HeaderArea = styled.header`
  max-height: 437px;
  max-width: 532px;
`;

export const Workspace = styled.img`
  border-radius: 0 10px 10px 0;
`;

export const MainArea = styled.main`
  background-color: ${theme.colors.port_gore};
  border-radius: 10px 0 0 10px;
  padding: 68px 100px 68px 68px;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  animation: fade-in 1s;
  max-width: 400px;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 34px;
  margin-bottom: 25px;
`;

export const Highlight = styled.span`
  color: ${theme.colors.medium_purple};
  margin: 0 7px;
`;

export const Description = styled.p`
  color: ${theme.colors.santas_gray};
  font-size: 14px;
  line-height: 1.7em;
  margin-bottom: 70px;
`;

export const DataContainer = styled.section`
  animation: fade-in 1s;
  display: flex;
  justify-content: center;
`;
