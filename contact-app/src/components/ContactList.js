import React from "react";

const ContactList=(props)=>{
    console.log('props:', props)
        const renderContacts=props.contacts.map((listItem)=>{
            return <div className="item">
                        <div className="content">
                            <div className="header">{listItem.name}</div>
                            <div>{listItem.email}</div>
                        </div>
                        <i className="trash alternate outline icon"></i>
                    </div>
        });
        return(
            <div className="ui celled list">
                {renderContacts}
            </div>
        );
}

export default ContactList;