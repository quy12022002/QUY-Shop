import "./App.scss";
import { Container } from "react-bootstrap";
import Header from "./components/layouts/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <Menu /> */}
      <Container></Container>
    </div>
  );
}

export default App;
