import React from 'react';
import GetApiData from '../../hooks/GetApiData';


function Contact() {
  const [apiData] = GetApiData("/api/contact");
  const contactData = apiData.data.data;

  return (
    <div>{ contactData }</div>
  );
}

export default Contact;
