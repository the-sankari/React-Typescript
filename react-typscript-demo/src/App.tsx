import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      <div className="App">
        <Greet name="John" age={30} />
      </div>
    </>
  );
}

export default App;
