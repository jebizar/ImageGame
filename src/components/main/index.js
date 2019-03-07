import React from "react";
import "./style.css";

function Main(props) {
    return(
        <img src = {props.image} alt = {props.name} onClick = { () => props.onClick(props.id)}/>
    );
}

export default Main;