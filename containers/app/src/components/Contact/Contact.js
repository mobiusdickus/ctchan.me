import React, { useState, useEffect } from 'react';


function Contact() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/contact").then(response =>
      response.json().then(data => {
        console.log(data);
        setData(data.data);
      })
    );
  }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default Contact;
