const todos = [
  {
    text: 'Todo 0',
    completed: true,
    id: 0,
  },
  {
    text: 'Todo 1',
    completed: false,
    id: 1,
  }
];

export const getTodos = () => {
  return new Promise((resolve)=> {
    setTimeout((resolve(todos)), 2000)
  })
};
