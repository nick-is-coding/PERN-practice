import './App.css';
import React, {Fragment} from 'react'; 

//Components

import InputTodo from "./Components/InputTodo";
import ListTodos from "./Components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
