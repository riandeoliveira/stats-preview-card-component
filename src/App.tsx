import stats from "./content/stats.json";
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
          {stats.map((item, i) => (
            <div key={i}>
              <h2>{item.name}</h2>
              <h3>{item.total}</h3>
            </div>
          ))}
        </DataBox>
      </main>
    </AppBox>
  );
};

export default App;
