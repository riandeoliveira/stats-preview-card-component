import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
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
  background-color: var(--main-color);
  border-radius: 10px 0 0 10px;
  padding: 68px 100px 68px 68px;
  width: 100%;
`;

export const ArticleArea = styled.article`
  max-width: 400px;
`;

export const Title = styled.h1`
  color: var(--title-color);
  font-size: 34px;
  margin-bottom: 25px;
`;

export const Highlight = styled.span`
  color: var(--highlight-color);
`;

export const Description = styled.p`
  color: var(--main-paragraph-color);
  font-size: 14px;
  line-height: 1.7em;
  margin-bottom: 70px;
`;

export const SectionArea = styled.section`
  display: flex;
  justify-content: center;
`;
