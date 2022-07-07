import { Card } from "@material-ui/core";
import "./App.css";
import FlexGrid from "./FlexGrid";
import layoutConfiguration from "./layoutConfiguration.json";

function App() {
  const getComponent = () => (
    <Card
      style={{
        backgroundColor: "red",
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Box
    </Card>
  );

  return (
    <div className="App">
      <FlexGrid
        layoutConfiguration={layoutConfiguration["lg"]}
        getComponent={getComponent}
      />
    </div>
  );
}

export default App;
