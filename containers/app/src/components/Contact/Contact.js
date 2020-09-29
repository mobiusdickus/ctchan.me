import React from 'react';
import useApiData from '../../hooks/UseApiData';

function Contact() {
  const [contactData, dataState] = useApiData('/api/contact');
  const email = contactData.data.data;

  return (
    <div>{email}</div>    
  );
};

export default Contact;
