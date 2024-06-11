import "./App.css";
import Layout from "./layout/Layout";
import AppRouter from "./navigation/AppRouter";

function App() {
  return (
    <>
    <AppRouter/>
      <Layout children={"Main"}/>
    </>
  );
}

export default App;
