import Greet from "./components/Greet";
import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Person name="Don" age={22}/>
      <Product name="House" price={2600}/>
    </>
  )
};

export default App;