import "./App.scss";
import Header from "./components/layouts/Header";
import BottomNavbar from "./components/layouts/BottomNavbar";
import Category from "./components/layouts/Category";
import HotDeals from "./components/layouts/HotDeals";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="category-container py-2">
        <Category />
      </div>
      <div id="hot-deals" className="section">
        <HotDeals />
      </div>
      <div className="bottom-navbar-container">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default App;
