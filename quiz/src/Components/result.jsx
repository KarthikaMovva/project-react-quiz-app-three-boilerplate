import {Link,useLocation} from "react-router-dom";
import "../App.css"
function Resultpage(){
    let fetch=useLocation()
    let importedvalues=fetch.state
    return(
        <div className="box"> 
        <div className="page">Result</div>
            <h3 className="result">You need more practice!</h3>
            <h4 className="score">Your score is {importedvalues.marks}</h4>
            <div className="find1">
                <p className="one">Total number of questions</p>
                <p className="num num1">15</p>
            </div>
            <div className="find2">
                <p className="two">Number of attempted questions</p>
                <p  className="num num2">{importedvalues.answered}</p>
            </div>
            <div className="find3">
                <p className="three">Number of correct answers</p>
                <p className="num num3">{importedvalues.addmark}</p>
            </div>
            <div className="find4">
                <p className="four">Number of wrong answers</p>
                <p className="num num4">{importedvalues.negmark}</p>
            </div>
            <div className="end">
                <Link to="/Quiz">
                <button className="text1">Play Again</button>
                </Link>
              <Link to="/">
              <button className="text2">Back to home</button>
              </Link>
            </div>
        </div>
          
    )
 }

export default Resultpage