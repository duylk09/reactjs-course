import Greet from "./components/Greet";
import Person from "./components/Person";
import Product from "./components/Product";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  

  return (
    <>
      <UserStatus loggedIn={true} isAdmin={true}/>
    </>
  )
};

export default App;