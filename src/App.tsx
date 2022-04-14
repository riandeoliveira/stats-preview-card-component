import infos from "./content/infos.json";
import { AppBox, DescriptionBox, DataBox } from "./styles/App";
import workspace from "./assets/workspace.png";

const App: React.FC = (): JSX.Element => {
  return (
    <AppBox>
      <header>
        <img alt="Women working on computers in an office" src={workspace} />
      </header>
      <main>
        <DescriptionBox>
          <h1>
            Get <span>insights</span> that help your bussiness grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer exprecience, and overall efficiency.
          </p>
        </DescriptionBox>
        <DataBox>
          {infos.map((info, i) => (
            <div key={i}>
              <h2>{info.name}</h2>
              <h3>{info.total}</h3>
            </div>
          ))}
        </DataBox>
      </main>
    </AppBox>
  );
};

export default App;
