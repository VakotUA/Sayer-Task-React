import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from '../Components/Items.js'

const screenStyle = {
  width: '100%',
  minWidth: '250px',

  backgroundColor: 'white',

  paddingBottom: '52px',
}

const headerStyle = {
  height: '100px',

  color: 'white',
  backgroundColor: '#0e1d3c',

  padding: '10px 15px 10px',
}

const addStyle = {
  width: '60px',
  height: '60px',

  backgroundColor: '#d4145a',
  boxShadow: '1px 1px 6px black',

  border: '0',
  borderRadius: '30px',

  padding: '0',
  margin: '0',
}

const buttonStyle = {
  content: '""',

  width: '60px',
  height: '60px',

  display: 'block',

  margin: '0 auto',

  position: 'relative',
}

const addStyleBefore = {
  content: '""',

  height: '6px',
  width: '26px',

  display: 'block',

  backgroundColor: '#f5a8f0',

  border: '0',

  position: 'absolute',
  left: '17px',
  top: '27px',
  zIndex: '1000',
}

const addStyleAfter = {
  content: '""',

  height: '6px',
  width: '26px',

  display: 'block',

  backgroundColor: '#f5a8f0',

  border: '0',

  position: 'absolute',
  left: '17px',
  bottom: '27px',
  zIndex: '1000',

  transformOrigin: 'center',
  transform: 'rotate(90deg)',
}

// localStorage.clear();
// sessionStorage.clear();

function Main() {
  return (
    <div className="screen_block" style={screenStyle}>
      <div className="header" style={headerStyle}>
        <h1>Sayer</h1>
        <p>World's most used time waster</p>
      </div>
      <Items />
      <div className="button_block" style={buttonStyle}>
        <Link role="button" to="/addnewitem">
          <button type="button" style={addStyleBefore}></button>
          <button type="button" style={addStyle}></button>
          <button type="button" style={addStyleAfter}></button>
        </Link>
      </div>
    </div>
  )
}

export default Main