import logo from './logo.svg';
import './App.css';
import { tasks, sidebarItems , startNextId, TaskCategory} from './data';
import {useState, useEffect} from 'react';

let nextId = startNextId+1

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

function FabButton({onClick}) {
  return (
    <div className="fab" onClick={onClick}>
      <span className="fab-icon">+</span>
    </div>
  );
}

export default function App() {
  const [listItems, setListItems] = useState(tasks);
  const [currentList, setCurrentList] = useState(TaskCategory.INBOX);
  
  const handleCurrentListChange = (newList) => {
    setCurrentList(newList);
  };

  const handleFabClick = () => {
    setListItems([...listItems, { id: nextId++, text : "awesome!" + nextId}])
  };


  return (
    <div className="App">
      <Sidebar clickHandler={handleCurrentListChange}sidebarArray={sidebarItems}/>
      <main>
      <h2>{currentList}</h2>
        <ToDoList className="toDoList" listArray={listItems} category={currentList}/>
      </main>
      <FabButton onClick={handleFabClick} />
    </div>
  );
}