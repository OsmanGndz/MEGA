// src/components/Contact.js
import React from 'react';

function Contact({ contact }) {
  return (
    <div>
      <h2>İletişim</h2>
      <a href= {contact.email}>Email</a><br/>
      <a href= {contact.twitter}>Twitter </a><br/>
      <a href= {contact.linkedin}>LinkedIn </a><br/>
      <a href= {contact.Github}>Github </a>
    </div>
  );
}

export default Contact;
