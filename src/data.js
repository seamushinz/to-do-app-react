export let startNextId = 0;

export const TaskCategory = {
  INBOX: "Inbox",
  ANYTIME: "Anytime",
  SOMEDAY: "Someday",
  COMPLETED : "Completed",
  TRASH : "Trash"
};

export const tasks = [
  { id: '1', text: 'Learn React' , category : TaskCategory.INBOX},
  { id: '2', text: 'inbox task!', category : TaskCategory.INBOX },
  { id: '3', text: 'another inbox task!', category : TaskCategory.INBOX },
  { id: '4', text: 'ill do this anytime!', category : TaskCategory.ANYTIME },
  { id: '5', text: 'someday ill get around to it!', category : TaskCategory.SOMEDAY }
];

startNextId = 7;
export const sidebarItems = [
  {id: '1', category: TaskCategory.INBOX},
  {id: '2', category: TaskCategory.ANYTIME},
  {id: '3', category: TaskCategory.SOMEDAY},
  {id: '4', category: TaskCategory.COMPLETED},
  {id: '5', category: TaskCategory.TRASH}
];