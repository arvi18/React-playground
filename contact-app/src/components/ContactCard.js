import React from "react";
import bday from "../images/bday.jpg";

const CardContact=(props)=>{
    const { key, name, email}=props.contact;
    return <div className="item">
    <img className="ui avatar image" alt="img" src={bday} />
    <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
    </div>
    <i 
    onClick={()=>props.clickHandler(key)}
    className="trash alternate outline icon"></i>
</div>
};

export default CardContact;