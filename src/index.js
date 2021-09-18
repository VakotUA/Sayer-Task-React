import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './Pages/Main.js';
import Comments from './Pages/Comments.js';
import AddNewItem from './Pages/AddNewItem.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route path="/comments" component={() => <Comments />} />
        <Route path="/addnewitem" component={() => <AddNewItem />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

//========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);