import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteContactHandler=(key)=>{
    props.getContactKey(key);
  };

  const renderContacts = props.contacts.map((contact) => {
    return (<ContactCard 
    contact={contact} 
    key={contact.key} 
    clickHandler={deleteContactHandler}
    />
    );
  });
  return <div className="ui celled list"> {renderContacts} </div>;
};

export default ContactList;

