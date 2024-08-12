import React, { useRef, useEffect, useState } from 'react';
import {TaskCategory, saveToDos, toDo} from './data';
import './App.css';

function FabButton({onClick,textInputVisible}) {
  return (
    <div className="fab" onClick={onClick}>
      <span className="fab-icon">{textInputVisible ? "✔" : "+"}</span>
    </div>
  );
}

const ToDoCreationField = ({ isVisible, onClose }) => {
  //hold text in text field in ref so it doesnt re-render
  const textFieldRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => { //runs this function when isVisible or onClose changes values
    const handleClickOutside = (event) => {
      //event.target refers to the element that was clicked. !textFieldRef.current.contains(event.target) verifies the clicked element is outide the text field
      if (textFieldRef.current &&
          !textFieldRef.current.contains(event.target) &&
          !event.target.classList.contains('fab') &&
          !event.target.classList.contains('fab-icon')) {
        onClose("poo",true);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    //runs during the cleanup phase, AKA when component removed from DOM or if any of the dependencies in the useEffect’s dependency array ([isVisible, onClose]) change, the cleanup function runs before the useEffect is executed again with the new values
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);


  //if not visible, return nothing since the text field shouldnt be shown
  if (!isVisible) return null;

  //else return the text input field
  return (
    <div
      ref={textFieldRef}
      className='toDoCreationField'>
      <input type="text" id="toDoTextInput" placeholder="Enter To-Do..." />
    </div>
  );
};

export default function FabWithTextField({setListItems,listArray,currentCategory}) {
  const [isTextFieldVisible, setIsTextFieldVisible] = useState(false);
  //const [toDoText, setToDoText] = useState('');

  const handleFabClick = () => {
    setIsTextFieldVisible(!isTextFieldVisible);
    //make a new todo
    if (isTextFieldVisible && document.getElementById("toDoTextInput").value != "")
    {//idk if theres a better way to do this
      setListItems([...listArray, new toDo(document.getElementById("toDoTextInput").value, currentCategory)])
    }
  };

  const handleCloseTextField = (text,pressedDone) => {
    setIsTextFieldVisible(false);
    //if (pressedDone) setToDoText(text);
  };
  return (
    <div>
      <FabButton onClick={handleFabClick} textInputVisible={isTextFieldVisible} />
      <ToDoCreationField
        isVisible={isTextFieldVisible}
        onClose={handleCloseTextField}
      />
    </div>
  );
};
