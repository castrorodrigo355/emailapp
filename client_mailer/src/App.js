import React from 'react';
import MailerForm from "./components/MailerForm/MailerForm";
import MailerList from "./components/MailerList/MailerList";
import service from "./services/Services";
import './App.css';

function App() {

  const onCreateEmail = email => {
    fetch("http://localhost:3000/mailer", {
                                      method: 'POST',
                                      body: JSON.stringify(email),
                                      headers:{ 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error))
  }

  return (
    <div className="App">
      <MailerForm onCreateEmail={onCreateEmail}/>
      <MailerList/>
    </div>
  );
}

export default App;
