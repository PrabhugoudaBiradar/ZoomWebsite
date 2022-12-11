
import './index.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './Components/Home';
import Signin from './Components/Signin';
import Shopping from './Components/Shopping';
import About from './Components/About';


function App() {
  return (

    <Router>
        <div className="App">
      <Switch>
        <Route exact path="/"><Home/></Route>
      
      <Route  exact path="/signin">
        <Signin/>
      </Route>

      <Route  exact path="/shopping">
       <Shopping/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      


      </Switch>
      


    </div>
    </Router>
  
  );
}

export default App;
