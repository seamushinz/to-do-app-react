import logo from './logo.svg';
import './App.css';
import FabWithTextField from './FabWithTextField';
import { toDos, sidebarItems, TaskCategory, saveToDos} from './data';
import {useState} from 'react';

function ToDo({toDoData}) {
  const text = toDoData.text;
  const handleClickToDoMarkDone = () => {
  //add to-do completion
  }
  return (
    <div className='toDo' key={toDoData.id}>
      <input className="toDoMarkDoneButton" type='button' onClick={handleClickToDoMarkDone}></input>
      <li className='toDoText'>
        {text}
      </li>
    </div>
  );
}
//for some reason says each child doesn't have key, each should todo list item should have a key though...
function ToDoList({listArray, category}) {
  const filteredListArray = listArray.filter(item => item.category === category);
  const listItems = filteredListArray.map(item =>
     <ToDo toDoData={item} />);
  return (
    <ul className='toDoList'>
      {listItems}
    </ul>
  );
}

function Sidebar({sidebarArray,clickHandler}) {
  const sidebarItems = sidebarArray.map(item =>
    <li key={item.id} className="sidebarItem" onClick={() => clickHandler(item.category)}>{item.category}</li>
  );
  return (
    <nav className="sidebar">
      {sidebarItems}
    </nav>
  );
}


export default function App() {
  const [listItems, setListItems] = useState(toDos);
  const [category, setCategory] = useState(TaskCategory.INBOX);
  
  const handleCurrentListChange = (newList) => {
    setCategory(newList);
  };



  return (
    <div className="App">
      <Sidebar clickHandler={handleCurrentListChange}sidebarArray={sidebarItems}/>
      <main>
      <h1>{category}</h1>
        <ToDoList className="toDoList" listArray={listItems} category={category}/>
      </main>
      <FabWithTextField setListItems = {setListItems} listArray={listItems} currentCategory={category}/>
    </div>
  );
}
