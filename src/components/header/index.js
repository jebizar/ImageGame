import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className = "jumbotron">
            <h1 className = "text-center">Image Game</h1>
            <h2 className = "text-center">Do not click the same image twice</h2>
            <h3 className = "text-center">{props.children}</h3>
            <div className="form-check form-check-inline d-flex justify-content-center">
                <input className="form-check-input" type="checkbox" value="1" id="1"/>
                <input className="form-check-input" type="checkbox" value="2" id="2"/>
                <input className="form-check-input" type="checkbox" value="3" id="3"/>
                <input className="form-check-input" type="checkbox" value="4" id="4"/>
                <input className="form-check-input" type="checkbox" value="5" id="5"/>
                <input className="form-check-input" type="checkbox" value="6" id="6"/>
                <input className="form-check-input" type="checkbox" value="7" id="7"/>
                <input className="form-check-input" type="checkbox" value="8" id="8"/>
                <input className="form-check-input" type="checkbox" value="9" id="9"/>
                <input className="form-check-input" type="checkbox" value="10" id="10"/>
                <input className="form-check-input" type="checkbox" value="11" id="11"/>
                <input className="form-check-input" type="checkbox" value="12" id="12"/>
            </div>
        </div>
    )
}

export default Header;