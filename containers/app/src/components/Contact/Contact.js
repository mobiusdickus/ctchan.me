import React from 'react';
import UseApiData from '../../hooks/UseApiData';


function Contact() {
  const [apiData] = UseApiData("/api/contact");
  const contactData = apiData.data.data;

  return (
    <div>{ contactData }</div>
  );
}

export default Contact;
