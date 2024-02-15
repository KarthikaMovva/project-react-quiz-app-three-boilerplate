import {Component} from "react";
import {Route,Routes} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Resultpage from "./Components/result";
import Quizpage from "./Components/Quiz";

class App extends Component{
 constructor(){
    super()
 }
 render(){
    return(
        <div>
           <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/Quiz" element={<Quizpage/>}></Route>
            <Route path="/Score" element={<Resultpage/>}></Route>
           </Routes>
        </div>
    )
 }
}
export default App;