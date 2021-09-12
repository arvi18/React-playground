import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log('props:contactlist: ', props)
  const renderContacts = props.contacts.map((contacts) => {
    return <ContactCard contacts={contacts} />;
  });
  return <div className="ui celled list"> {renderContacts} </div>;
};

export default ContactList;