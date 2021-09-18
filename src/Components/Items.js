import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const list_areaStyle = {
  backgroundColor: 'white',
}

const list_itemStyle = {
  height: '75px',

  display: 'flex',
  justifyContent: 'space-between',

  margin: '0',
  padding: '0',
  
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',

  fontSize: '20px',
  listStyleType: 'none',

  transition: '0.3s',
}

const list_item_blockStyle = {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: 'white',

  border: '0',

  padding: '0 15px',
  
  textAlign: 'left',

  position: 'relative',
}

const deleteStyle = {
  height: '75px',
  maxWidth: '35%',

  color: 'white',
  backgroundColor: 'red',
  border: '0',
  borderBottom: '1px solid red',
  
  fontSize: '20px',

  padding: '0',
  overflow: 'hidden',
  
  position: 'absolute',
  right: '0',

  transition: '0.3s',
}

const titleStyle = {
  width: '100%',

  margin: '0 1em 0 0',
  padding: '0',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const commentStyle = {
  height: '32px',
  width: 'auto',
  minWidth: '32px',

  color: 'white',
  backgroundColor: '#313464',

  border: '0',
  borderRadius: '50%',

  textAlign: 'center',
  textDecoration: 'none',
}

function useForceUpdate(){
  const [value, setValue] = useState(0);
  if (value === 0) {}
    return () => setValue(value => value + 1);
}

function Items() {
  const open = { width: '200px' };
  const close = { width: '0px' };

  const [_width, setWidth] = useState(new Array(localStorage.length).fill(close));

  const forceUpdate = useForceUpdate(); //перерендер списка, после удаления элемента

  const changeWidth = (id) => {
    id = JSON.parse(id);
    const arr = [..._width];

    if (arr[id].width === open.width) {
      arr[id] = close;
    }
    else {
      arr[id] = open;
    } //открытие нужной кнопки

    for (let i = 0; i < arr.length; i++) {
      if (i !== id) {
        arr[i] = close;
      }
    } //скрытие всех активных кнопок, кроме нужной

    setWidth(arr);
    
    console.log("Item delete button with id:",id,"is open/close");
  }

  const deleteItem = (id) => {
    id = JSON.parse(id);

    const arr = [..._width];
    arr[id] = close;
    setWidth(arr);

    const array = new Array(localStorage.length);

    let keys = Object.keys(localStorage)
    for(let key in keys) {
      array[key] = JSON.parse(localStorage.getItem(key));
    }

    array.splice(id, 1);

    localStorage.clear();

    array.map(arr => localStorage.setItem(localStorage.length, JSON.stringify(arr)));

    console.log("Item with id:",id,"is deleted");
  }

  const openComments = (id) => {
    sessionStorage.setItem(sessionStorage.length, id);
    console.log("Item comments with id:",JSON.parse(id),"is onClick");
  }

  const renderItem = (key, item) => {
    return (
      <li className="list_item" style={list_itemStyle} key={key}>
        <button style={list_item_blockStyle} onClick={() => changeWidth(key)}>
          <p className="list_item_title" style={titleStyle}>{item.title}</p>
          <Link role="button" style={commentStyle} to="/comments" onClick={() => openComments(key)}>{item.comments.length}</Link>
        </button>
        <button style={{...deleteStyle, ..._width[key]}} onClick={() => deleteItem(key)}>Delete</button>
      </li>
    )
  }

  var list = [];

  let keys = Object.keys(localStorage)
  for(let key in keys) {
    list.push(renderItem(key, JSON.parse(localStorage.getItem(key))));
  }

  return (
    <div style={list_areaStyle}>
      <ul style={{padding: '0'}} onClick={
        forceUpdate
      }>
        {list}
      </ul>
    </div>
  )
}

export default Items