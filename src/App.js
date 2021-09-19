import Boot from "./Components/Boot";
import BarChart from "./Components/BarChart";
import FirebaseCrud from "./FirebaseCrud";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div>
      <BarChart />

      <Boot />

      <Container>{<FirebaseCrud></FirebaseCrud>}</Container>
    </div>
  );
}

export default App;
