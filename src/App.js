import "./App.css";
import Header from "./components/Layout/Header";
import DummyMeals from "./components/Meals/DummyMeals";
import MealSummary from "./components/Meals/MealSummary";

function App() {
  return (
    <div className="App">
      <Header />
      <MealSummary />
      <DummyMeals />
    </div>
  );
}

export default App;
