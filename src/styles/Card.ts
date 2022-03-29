import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 20px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const HeaderArea = styled.header`
  max-height: 437px;
  max-width: 532px;
`;

export const Workspace = styled.img`
  border-radius: 0 10px 10px 0;

  @media screen and (max-width: 1200px) {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }
`;

export const MainArea = styled.main`
  background-color: var(--port-gore-color);
  border-radius: 10px 0 0 10px;
  padding: 68px 100px 68px 68px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    border-radius: 0 0 10px 10px;
    max-width: 532px;
    padding: 40px;
    text-align: center;
  }
`;

export const ArticleArea = styled.article`
  max-width: 400px;

  @media screen and (max-width: 1200px) {
    max-width: none;
  }
`;

export const Title = styled.h1`
  color: var(--white-color);
  font-size: 34px;
  margin-bottom: 25px;
`;

export const Highlight = styled.span`
  color: var(--medium-purple-color);
  margin: 0 7px;
`;

export const Description = styled.p`
  color: var(--santas-gray-color);
  font-size: 14px;
  line-height: 1.7em;
  margin-bottom: 70px;

  @media screen and (max-width: 1200px) {
    margin-bottom: 25px;
  }
`;

export const SectionArea = styled.section`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
