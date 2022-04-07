import { DataProps } from "../interfaces/interfaces";
import { InfoContainer, InfoName, InfoNumber } from "../styles/Data";

const Data: React.FC<DataProps> = ({ content }): JSX.Element => {
  const { info_name, info_number } = content;

  return (
    <InfoContainer className="info-container">
      <InfoName>{info_name}</InfoName>
      <InfoNumber>{info_number}</InfoNumber>
    </InfoContainer>
  );
};

export default Data;
