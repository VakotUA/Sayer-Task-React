import React from 'react'
import { Link } from 'react-router-dom';
import Return from "../Components/icons8_left_arrow_64.png"
import Confirm from "../Components/forward_64px.png"

const screenStyle = {
  width: '100%',
  minWidth: '250px',

  backgroundColor: 'white',

  paddingBottom: '52px'
}

const headerStyle = {
  height: '100px',
  width: '100%',

  display: 'flex',

  alignItems: 'center',

  color: 'white',
  backgroundColor: '#0e1d3c',

  padding: '20px 15px',
}

const titleStyle = {
  display: 'block',

  wordErap: 'break-word',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  maxHeight: '3.6em',
  lineHeight: '1.2em',

  paddingLeft: '1em',
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

  backgroundColor: '#e6e6e6',

  padding: '4px 15px 4px 4px',
  
  position: 'fixed',
  bottom: '0',
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
  height: '40px',

  border: '0',

  margin: '4px 15px 4px 4px',
  padding: '0 0.5em',

  fontSize: '20px',
  textOverflow: 'ellipsis',
}

const commentStyle = {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',

  opacity: '0.9',

  borderBottom: '2px solid rgba(0, 0, 0, 0.1)',

  padding: '15px',
  margin: '0',

  fontSize: '16px',
  lineHeight: '1.25',
  listStyleType: 'none',
  wordWrap: 'normal',
  wordBreak: 'break-word',
}

const avatarStyle = {
  minWidth: '60px',
  height: '60px',
  
  marginRight: '1em',
}

function Comments() {
  var newComment;
  var item = JSON.parse(localStorage.getItem(JSON.parse(sessionStorage.getItem(sessionStorage.length-1))));

  function handleClick() {
    var r = Math.floor(Math.random() * 230) + 1;
    var g = Math.floor(Math.random() * 230) + 1;
    var b = Math.floor(Math.random() * 230) + 1;
    if (newComment!=null && newComment!=="") {
      var color = {backgroundColor: `rgb(${r},${g},${b})`}
      item.comments.push([newComment, color]);
      localStorage.setItem(sessionStorage.getItem(sessionStorage.length-1), JSON.stringify(item));
      console.log("Comment to item with id:",JSON.parse(localStorage.key(JSON.parse(sessionStorage.getItem(sessionStorage.length-1)))),"was added");
    }
    else {
      alert("Comment is empty")
    }
    document.getElementById('comment_input').value = '';
  }

  function handleChange(title) {
    newComment=title.target.value;
  }

  var i = 0;
  function renderComment(text, color) {
    
    i++;
    return (
      <li className="comment" style={commentStyle} key={i}>
        <div className="avatar" style={{...avatarStyle, ...color}}></div>
        <div className="text" style={{width: '100%'}}>{text}</div>
      </li>
    )
  }

  return (
    <div className="screen_block" style={screenStyle}>
      <div className="header" style={headerStyle}>
        <Link role="button" style={returnStyle} to="/">
          <img src={Return} alt="Return" style={returnIcon}/>
        </Link>
        <h4 style={titleStyle}>{item.title}</h4>
      </div>
      <div className="commentBlock" style={{padding: '15px 0 0'}}>
        <ul style={{padding: '0', margin: '0', width: '100%'}}>
          {item.comments.map(comment => renderComment(comment[0], comment[1]))}
        </ul>
      </div>
      <div style={inputblockStyle}>
        <input id="comment_input" type="text" style={inputStyle} placeholder="New comment goes here..." onChange={handleChange} />
        <Link 
          role="button"
          style={confirmStyle}
          to="/comments"
          onClick={handleClick}
        >
            <img src={Confirm} alt="Confirm" style={confirmIcon}/>
        </Link>
      </div>
    </div>
  )
}

export default Comments