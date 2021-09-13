import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log("props:contactlist: ", props);
  const renderContacts = props.contacts.map((contact) => {
    console.log('props.contacts:', props.contacts)
    console.log('contactList contact props map contact:', contact)
    return (<ContactCard 
    contact={contact} 
    />
    );
  });
  return <div className="ui celled list"> {renderContacts} </div>;
};

export default ContactList;

// key={contact.key} 
