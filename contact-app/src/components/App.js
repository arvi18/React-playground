import './App.css';
import React from 'react';
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import Header from './Header';

function App() {
  const {contacts, setContacts}=React.useState([]);

  const addContactHandler=(contact)=>{
    console.log('contact:', contact)
    setContacts([...contacts, contact]);
  }
  return (
    <div className="ui container" >
      <Header /> 
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;