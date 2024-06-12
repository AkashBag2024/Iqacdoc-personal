import "./App.css";
import Layout from "./layout/Layout";
import AppRouter from "./navigation/AppRouter";

function App() {
  return (
    <div>
    <AppRouter/>
      <Layout children={"Main"}/>
    </div>
  );
}

export default App;
