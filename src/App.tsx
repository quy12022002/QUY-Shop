import "./App.scss";
import Header from "./components/layouts/Header";
import BottomNavbar from "./components/layouts/BottomNavbar";
import Category from "./components/layouts/Category";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="category-container pt-2">
        <Category />
      </div>

      <div className="bottom-navbar-container">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default App;
