import './App.css';
import React, {useState, useEffect} from 'react';
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import Header from './Header';
import {uuid} from "uuidv4";

function App() {
  const [contacts, setContacts]=useState([]);
  const LOCAL_STORAGE_KEY="contacts";

  const addContactHandler=(contact)=>{
    setContacts([...contacts, {key: uuid(), ...contact }]);
  }

  const removeContact=(key)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.key!==key;
    })
    setContacts(newContactList);
  }
  
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container" >
      <Header /> 
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactKey={removeContact} />
    </div>
  );
}

export default App;