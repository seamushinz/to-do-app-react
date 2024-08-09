import logo from './logo.svg';
import './App.css';
import FabWithTextField from './FabWithTextField';
import { toDos, sidebarItems, TaskCategory, saveToDos} from './data';
import {useState, useEffect, useRef} from 'react';

function ToDo({toDoData}) {
  const text = toDoData.text;
  return (
  <li key={toDoData.id}>
    {text}
  </li>
  );
}

function ToDoList({listArray, category}) {
  const filteredListArray = listArray.filter(item => item.category === category);
  const listItems = filteredListArray.map(item =>
     <ToDo toDoData={item} />);
  return (
    <ul>
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
  const [currentList, setCurrentList] = useState(TaskCategory.INBOX);
  
  const handleCurrentListChange = (newList) => {
    setCurrentList(newList);
  };

  return (
    <div className="App">
      <Sidebar clickHandler={handleCurrentListChange}sidebarArray={sidebarItems}/>
      <main>
      <h1>{currentList}</h1>
        <ToDoList className="toDoList" listArray={listItems} category={currentList}/>
      </main>
      <FabWithTextField setListItems = {setListItems} listArray={listItems}/>
    </div>
  );
}
