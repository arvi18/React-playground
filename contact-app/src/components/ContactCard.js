import React from "react";
import bday from "../images/bday.jpg";

const CardContact=(props)=>{
    const { name, email}=props.listItem;
    return <div className="item">
    <img className="ui avatar image" src={bday} />
    <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
    </div>
    <i className="trash alternate outline icon"></i>
</div>
};

export default CardContact;