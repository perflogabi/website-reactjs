import "./App.css"
import "./index.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import TopFoods from "./components/TopFoods";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <TopFoods/>
      <Category/>
    </div>
  );
}

export default App;
