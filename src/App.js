import logo from './logo.svg';
import './App.css';
import FabWithTextField from './FabWithTextField';
import { toDos, sidebarItems, TaskCategory, saveToDos, toDo} from './data';
import {useState} from 'react';

function ToDo({toDoData}) {
  const text = toDoData.text;
  return (
    <div>
      <li className='toDoText'>
        {text}
      </li>
    </div>
  );
}
//for some reason says each child doesn't have key, each should todo list item should have a key though...
function ToDoList({listArray, category, setListItems}) {
  const filteredListArray = listArray.filter(item => item.category === category);
  const listItems = filteredListArray.map(item =>
    <div className='toDo' key={item.id}>
      <input className="toDoMarkDoneButton" type='button' onClick={
        () => {
        item.COMPLETED = !item.COMPLETED;
        if (item.COMPLETED) {
          item.category = TaskCategory.COMPLETED;
        }else{
          console.log("marked as not completed");
        }
        setListItems([...listArray]);
        }
        }></input>
      <ToDo toDoData={item} setListItems={setListItems} listItems/>
     </div>
    );
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
        <ToDoList className="toDoList" listArray={listItems} category={category} setListItems={setListItems}/>
      </main>
      <FabWithTextField setListItems = {setListItems} listArray={listItems} currentCategory={category}/>
    </div>
  );
}
