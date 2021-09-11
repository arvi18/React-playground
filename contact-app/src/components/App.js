import './App.css';
import React from 'react';
// import ContactCard from "./ContactCard"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import Header from './Header';

function App() {
  const contacts=[
  {
    key:"1",
    name:"nam kon dekhega bhai :/",
    email:"hmm"
  },
  {
    key:"2",
    name:"nam koi dekhega nai",
    email:"hmmm"
  }
]
  return (
    <div className="ui container" >
      <Header />  
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;