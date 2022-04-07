import content from "../content/card.json";
import { CardProps } from "../interfaces/interfaces";
import {
  CardContainer,
  HeaderArea,
  Workspace,
  MainArea,
  DescriptionContainer,
  Title,
  Highlight,
  Description,
  DataContainer,
} from "../styles/Card";
import { workspace } from "../assets/media";

const { workspace_alt, title_1, highlight, title_2, description } = content;

const Card: React.FC<CardProps> = ({ data }): JSX.Element => {
  return (
    <CardContainer className="card-container">
      <HeaderArea>
        <Workspace alt={workspace_alt} className="workspace" src={workspace} />
      </HeaderArea>
      <MainArea className="main-area">
        <DescriptionContainer className="description-container">
          <Title>
            {title_1}
            <Highlight>{highlight}</Highlight>
            {title_2}
          </Title>
          <Description className="description">{description}</Description>
        </DescriptionContainer>
        <DataContainer className="data-container">{data}</DataContainer>
      </MainArea>
    </CardContainer>
  );
};

export default Card;
