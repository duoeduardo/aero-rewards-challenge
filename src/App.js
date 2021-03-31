import { ProductsList } from "./components/ProductsList";
import "./App.css";
import { Navbar } from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <ProductsList />
    </main>
  );
}

export default App;
