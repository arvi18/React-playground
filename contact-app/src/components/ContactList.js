import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContacts = props.contacts.map((contact) => {
    return (<ContactCard 
    contact={contact} 
    />
    );
  });
  return <div className="ui celled list"> {renderContacts} </div>;
};

export default ContactList;

// key={contact.key} 
