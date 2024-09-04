export const TaskCategory = {
  INBOX: "Inbox",
  ANYTIME: "Anytime",
  SOMEDAY: "Someday",
  COMPLETED : "Completed",
  TRASH : "Trash"
};

export class toDo {
  // Static variable (property)
  static nextId = 0;
  constructor(text,category) {
    toDo.nextId++
    this.id = crypto.randomUUID();
    this.text = text;
    this.category = category;
    if (this.category == TaskCategory.COMPLETED) {
      this.COMPLETED = true;
    }else{
      this.COMPLETED = false;
    }
  }
}

export const toDos = [
  new toDo('Learn React', TaskCategory.INBOX),
  new toDo('inbox task!', TaskCategory.INBOX),
  new toDo('another inbox task!', TaskCategory.INBOX),
  new toDo('ill do this anytime!', TaskCategory.ANYTIME),
  new toDo('someday ill get around to it!', TaskCategory.SOMEDAY)
];

export const sidebarItems = [
  {id: '1', category: TaskCategory.INBOX},
  {id: '2', category: TaskCategory.ANYTIME},
  {id: '3', category: TaskCategory.SOMEDAY},
  {id: '4', category: TaskCategory.COMPLETED},
  {id: '5', category: TaskCategory.TRASH}
];


export function saveToDos(){
  const todosJson = JSON.stringify(toDos)
  localStorage.setItem("toDos",todosJson)
}

export function getToDos(){
  const toDos = localStorage.getItem("toDos") || "[]";
  return JSON.parse(toDos)
}