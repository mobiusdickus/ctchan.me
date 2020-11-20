import React from 'react';

import useApiData from '../../hooks/UseApiData';

import './Contact.css';

function Contact() {
  const [contactData, dataState] = useApiData('/api/contact');
  const email = contactData.data.data;

  return (
    <>
      <div className="Contact">
        <div className="Contact-header">
          <h1>Contact</h1>
          <div>{email}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
