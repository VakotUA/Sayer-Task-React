import React from 'react'
import { Link } from 'react-router-dom';
import Return from "../Components/icons8_left_arrow_64.png"
import Confirm from "../Components/forward_64px.png"

const screenStyle = {
  width: '100%',
  minWidth: '250px',

  backgroundColor: 'white',

  paddingBottom: '52px',
}

const headerStyle = {
  height: '100px',

  display: 'flex',
  alignItems: 'center',

  color: 'white',
  backgroundColor: '#0e1d3c',

  padding: '20px 15px',
}

const returnStyle = {
  height: '40px',
  width: 'auto',
  minWidth: '40px',

  color: 'white',
  backgroundColor: '#313464',

  border: '0',
  borderRadius: '50%',

  fontSize: '26px',
  textAlign: 'center',
  textDecoration: 'none',

  position: 'relative',
}

const returnIcon = {
  width: '30px',

  position: 'absolute',
  top: '5px',
  left: '5px',
}

const inputblockStyle = {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '20px',
}

const confirmStyle = {
  height: '40px',
  width: 'auto',
  minWidth: '40px',

  color: 'white',
  backgroundColor: '#313464',

  border: '0',
  borderRadius: '50%',

  fontSize: '26px',

  position: 'relative',
}

const confirmIcon = {
  width: '25px',

  position: 'absolute',
  top: '7.5px',
  left: '7.5px',
}

const inputStyle = {
  width: '100%',

  border: '0',
  borderRadius: '0',
  borderBottom: '2px solid rgba(0, 0, 0, 0.4)',

  fontSize: '20px',

  margin: '20px 15px',
}

function AddNewItem() {
  var newTitle = '';

  function handleClick() {
    if (newTitle.length > 60) {
      return alert("Item title is too long (recom,ended length is 60 characters)");
    }

    if (newTitle!=null && newTitle!=="") {
      const item = {
        title: newTitle, 
        comments: new Array(0).fill(['', null]),
      };

      localStorage.setItem(localStorage.length, JSON.stringify(item));
      console.log("Item with id:", localStorage.length-1,"was added");
    }
    else {
      alert("Item title is empty")
    }

    document.getElementById('title_input').value = '';
    newTitle='';
  }

  function handleChange(title) {
    newTitle=title.target.value;
  }
  
  return (
    <div className="screen_block" style={screenStyle}>
      <div className="header" style={headerStyle}>
        <Link role="button" style={returnStyle} to="/">
          <img src={Return} alt="Return" style={returnIcon}/>
        </Link>
        <h4 style={{paddingLeft: '1em'}}>Create new item</h4>
      </div>
      <div style={inputblockStyle}>
        <input id="title_input" type="text" style={inputStyle} placeholder="New item title..." onChange={handleChange}/>
        <button type="button" style={confirmStyle} onClick={handleClick}>
          <img src={Confirm} alt="Confirm" style={confirmIcon}/>
        </button>
      </div>
    </div>
  )
}

export default AddNewItem