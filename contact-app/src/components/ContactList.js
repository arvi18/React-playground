import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContacts = props.contacts.map((listItem) => {
    return <ContactCard listItem={listItem} />;
  });

  return <div className="ui celled list">{renderContacts}</div>;
};

export default ContactList;
