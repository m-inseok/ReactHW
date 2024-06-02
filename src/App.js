import Login from "./Login";
import Registerpg from "./page/Registerpage";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Loginpg from "./page/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<Login/>}/>
        <Route path = "/login" element= {<Loginpg/>}/>
        <Route path = "/register" element= {<Registerpg/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
