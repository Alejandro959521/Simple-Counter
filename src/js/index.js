//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {faClock}  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes from "prop-types";
//import your own components
import Home from "./component/home.jsx";


function Counter(props){

return (<div className="Grande">

<div className="imagen"> <FontAwesomeIcon  icon= {faClock}/>  </div>
<div className="a">  {props.a6} </div>
<div className="b">  {props.a5} </div>
<div className="c"> {props.a4} </div>
<div className="d"> {props.a3} </div>
<div className="e">  {props.a2} </div>
<div className="f">  {props.a1} </div>
</div>);

}

Counter.propTypes ={
    a6:PropTypes.number,
    a5:PropTypes.number,
    a4:PropTypes.number,
    a3:PropTypes.number,
    a2:PropTypes.number,
    a1:PropTypes.number
};
let cifra =0;
setInterval( function() {
  const cifra6=Math.floor(cifra/100000);
  const cifra5=Math.floor(cifra/10000);
  const cifra4=Math.floor(cifra/1000);
const cifra3=Math.floor(cifra/100);
const cifra2=Math.floor(cifra/10);
const cifra1=Math.floor(cifra/1);

//render your react application
cifra++;
ReactDOM.render(<Counter a1={cifra1} a2={cifra2} a3={cifra3} a4={cifra4} a5={cifra5} a6={cifra6}/>, document.querySelector("#app"));

},1000);





