import logo from './logo.svg';
import './App.css';
import { tasks, sidebarItems , startNextId} from './data';
import {useState, useEffect} from 'react';

let nextId = startNextId+1

function ToDo({toDoData}) {
  const text = toDoData.text;
  return <li key={toDoData.id}>{text}</li>;
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

function Sidebar({sidebarArray}) {
  const sidebarItems = sidebarArray.map(item =>
    <li key = {item.id} className = "sidebarItem">{item.text}</li>
  );
  return (
    <nav className = "sidebar">
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
  const [unfinishedListItems, setUnfinishedItems] = useState(tasks);
  const handleFabClick = () => {
    setUnfinishedItems([...unfinishedListItems, { id: nextId++, text : "awesome!" + nextId}])
  };

  return (
    <div className="App">
      <Sidebar sidebarArray={sidebarItems}/>
      <main>
        <h2>Inbox</h2>
        <ToDoList className="toDoList" listArray={unfinishedListItems}/>
      </main>
      <FabButton onClick={handleFabClick} />
    </div>
  );
}