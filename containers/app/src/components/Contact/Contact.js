import React from 'react';
import UseApiData from '../../hooks/UseApiData';


function Contact() {
  const [apiData, dataState] = UseApiData("/api/contact");
  console.log("apiData: ", apiData);
  console.log("dataState: ", dataState);

  var data = null;
  if (!dataState.isFetching) {
    data = apiData.data.data;
  };
  console.log("data: ", data);

  const contactStyle = {
    textAlign: "center"
  };

  return (
    <div className="container">
      <h1 style={contactStyle}>Contact</h1>
      {
        !dataState.isFetching ?
        <div>
          <p style={contactStyle}>Name: { data.name }</p>
          <p style={contactStyle}>Email: { data.email }</p>
          <p style={contactStyle}>Github: { data.github }</p>
        </div> : <p style={contactStyle}>Loading....</p>
      }
    </div>
  );
}

export default Contact;
