import {Component} from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
class Homepage extends Component{
 constructor(){
    super()
 }
 render(){
    return(
        <div className="total">
           <div className="title">Quiz App</div>
           <NavLink to="/Quiz">
           <button className="press">Play</button>
           </NavLink>
        </div>
    )
 }
}
export default Homepage