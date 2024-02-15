import Arr from "../resources/quizQuestion";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Quizpage(){
    const[num,setnum]=useState(0)
    const[ques,setques]=useState({
        answered : 0,
        addmark : 0,
        negmark: 0,
        marks: 0
    })


const definepath=useNavigate()

const nextbutton = ()=>{
    let questionnumber=num; 
    if(questionnumber==Arr.length-1){
        setnum(0);   
    }
    else{
        setnum(questionnumber+1)
    }
 }
const prevbutton = ()=>{
    let questionnumber=num;

    if(questionnumber==0){
        setnum(Arr.length-1);
    }
    else{
        setnum(questionnumber-1)
    }
}
 
const quitbutton = ()=>{
    let questionnumber=num;
    alert("Are you sure you want to quit?")
    if(questionnumber==Arr.length-1){
        setnum(0);
    }
    else{
    setnum(questionnumber+1)}
 }
 
    let questionnumber=num;
const findcorrectanswer = (e)=>{
    let questionnumber=num
    const selectedanswer=e.target.innerHTML
    const keyanswer=Arr[questionnumber].answer

    if(selectedanswer==keyanswer){
        alert("correct answer")
        setques({...ques,addmark:ques.addmark+1,
        answered:ques.answered+1,
    marks:ques.marks+1})
    }else{
        alert("wrong answer")
        setques({...ques,negmark:ques.negmark+1,
        answered:ques.answered+1})
    }
}
return(
        <div className="table"> 
            <h2 className="address">Question</h2>
             <p className="serialno">{num+1} of 15</p>
            <h4 className="ques">{Arr[questionnumber].question}</h4>
           <div className="option1">
                <p className="gap" onClick={(e)=>{findcorrectanswer(e)}}>{Arr[questionnumber].optionA}</p>
                <p className="gap" onClick={(e)=>{findcorrectanswer(e)}}>{Arr[questionnumber].optionB}</p>
            </div>
            <div className="option2">
                <p className="gap" onClick={(e)=>{findcorrectanswer(e)}}>{Arr[questionnumber].optionC}</p>
                <p className="gap" onClick={(e)=>{findcorrectanswer(e)}}>{Arr[questionnumber].optionD}</p>
            </div>
            <div className="option3">
                <button className="b first" onClick={prevbutton}>Previous</button>
                <button className="b second" onClick={nextbutton}>Next</button>
                <button className="b third" onClick={quitbutton}>Quit</button>
                <button onClick={()=>{definepath("/Score",{state : ques})}} className="finish">Finish</button>
            </div>  
        </div>
    )
 }


export default Quizpage