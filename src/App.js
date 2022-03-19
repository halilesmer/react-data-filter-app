import "./App.css";
import FilterBar from "./components/FilterBar";
import { AppProvider } from "./components/AppContext";




function App() {
  

  return (
    <AppProvider>
      <FilterBar/>
    </AppProvider>
  );
}

export default App;

