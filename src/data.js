export let startNextId = 0;

const TaskCategory = {
  INBOX: "Inbox",
  TODAY: "Today",
  ANYTIME: "Anytime",
  SOMEDAY: "Someday",
};

export const tasks = [
  { id: '1', text: 'Learn React', completed: false , category : TaskCategory.TODAY},
  { id: '2', text: 'inbox task!', completed: false, category : TaskCategory.INBOX },
  { id: '3', text: 'a today task!', completed: false, category : TaskCategory.TODAY },
  { id: '4', text: 'ill do this anytime!', completed: false, category : TaskCategory.ANYTIME },
  { id: '5', text: 'someday ill get around to it!', completed: false, category : TaskCategory.SOMEDAY }
];

startNextId = 7;
export const sidebarItems = [
  {id: '1', text: 'Inbox'},
  {id: '2', text: 'Today'},
  {id: '3', text: 'Upcoming'},
  {id: '4', text: 'Anytime'},
  {id: '5', text: 'Someday'},
  {id: '6', text: 'Trash'}
];