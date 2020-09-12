import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navigation() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <div className="row">
      <div>
        <Button variant="primary" className="home-button">
          <Link to='/' style={linkStyle}>Home</Link>
        </Button>
      </div>
      <div>
        <Button variant="primary" className="home-button">
          <Link to='/about' style={linkStyle}>About</Link>
        </Button>
      </div>
      <div>
        <Button variant="primary" className="home-button">
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </Button>
      </div>
      <div>
        <Button variant="primary" className="home-button">
          <Link to='/canttouchthis' style={linkStyle}>Click me</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
