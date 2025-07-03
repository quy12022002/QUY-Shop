import "./App.scss";
import { Container } from "react-bootstrap";
import Header from "./components/layouts/Header";
import Collections from "./components/layouts/Collections";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Collections />
    </div>
  );
}

export default App;
