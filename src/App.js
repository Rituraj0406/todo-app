import "./App.css";
import Todo from "./module/Todo";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Todo />
      </GlobalProvider>
    </>
  );
}

export default App;
