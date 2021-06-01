import "./styles.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Tools from "./Components/Tools";
import My_choice from "./Components/My_choice";
import Websites from "./Components/Websites";
import Navbar from "./Components/Navbar";
export default function App() {
   return (
      <Router>
         <Navbar />
         <div className="App">
            <Switch>
               <Route exact path="/index.html" component={Homepage} />
               <Route path="/tools.html" component={Tools} />
               <Route path="/my_choices.html" component={My_choice} />
               <Route path="/websites.html" component={Websites} />
            </Switch>
         </div>
      </Router>
   );
}
