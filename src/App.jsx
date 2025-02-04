import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Nav />
        <Main />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
