import data from "./data/data.json";
import { Data } from "./components/Data";
import { Card } from "./components/Card";

const { data_names, data_numbers } = data;

export const App: React.FC = () => {
  const handleCardData = data_names.map((item, i) => (
    <Data name={data_names[i]} number={data_numbers[i]} />
  ));

  return <Card cardData={handleCardData} />;
};
