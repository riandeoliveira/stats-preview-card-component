import {
  CardContainer,
  HeaderArea,
  Workspace,
  MainArea,
  ArticleArea,
  Title,
  Highlight,
  Description,
  SectionArea,
} from "../styles/Card";
import data from "../data/data.json";
import workspace from "../assets/images/workspace.png";

const { workspace_alt, title_1, highlight, title_2, description } = data;

interface CardProps {
  cardData: JSX.Element[];
}

export const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <CardContainer>
      <HeaderArea>
        <Workspace alt={workspace_alt} src={workspace} />
      </HeaderArea>
      <MainArea>
        <ArticleArea>
          <Title>
            {title_1}
            <Highlight>{highlight}</Highlight>
            {title_2}
          </Title>
          <Description>{description}</Description>
        </ArticleArea>
        <SectionArea>{cardData}</SectionArea>
      </MainArea>
    </CardContainer>
  );
};
