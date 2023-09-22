import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Header />
    </header>
    <ProductList />
  </div>
  );
}

export default App;
