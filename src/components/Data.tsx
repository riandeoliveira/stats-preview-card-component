import { DataContainer, DataTitle, DataSubtitle } from "../styles/Data";

interface DataProps {
  name: string;
  number: string;
}

export const Data: React.FC<DataProps> = ({ name, number }) => {
  return (
    <DataContainer>
      <DataTitle>{name}</DataTitle>
      <DataSubtitle>{number}</DataSubtitle>
    </DataContainer>
  );
};
