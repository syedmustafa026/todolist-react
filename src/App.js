import Addtodo from './function.jsx'
import './App.css';
import Button from './button';
import Input from './input';

function App() {
  return (
    <div>
       <div className="header" id = "header">
        {/* <div class="flexrow-container">
            <div class="standard-theme theme-selector"></div>
            <div class="light-theme theme-selector"></div>
            <div class="darker-theme theme-selector"></div>
        </div> */}
        <h1  id="title">To do list! <div id="border"></div></h1>
    </div>

  <div id="form">
        <form>
        
        <div>
      <Input className="todo-input" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Add a task"/>
      <Button className="add-btn" onClick={addTodo}>Add this</Button>
      <ul>
        {todos.map((v, i) => {
          return <li className="todo-btn " key={i}>{v} <Button onClick={() => deleteTodo(i)}>Delete All</Button></li>
        })}
      </ul>
    </div>
            {/* <input className="todo-input" id="input" type="text" placeholder="Add a task."/>
            <button  class="add-btn" type="button">Add this</button>
            <button className="todo-btn " type="button">Delete All</button> */}
        </form>
    </div>

  <div id="myUnOrdList">
        <ul id="list" class="todo-list">
              
        </ul>
    </div>
    </div>
  );
}

export default App;
