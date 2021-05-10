export const data = {
  list: [
    { name: 'lundi', id: 'lu' },
    { name: 'mardi', id: 'ma' },
    { name: 'Mercredi', id: 'me' },
    { name: 'Jeudi', id: 'je' },
  ],
  listOrder: [{ lu: ['todo1', 'todo2'] }, { ma: [] }, { me: [] }, { je: [] }],
  elem: [
    { name: 'todo1', desc: 'todooooo1' },
    { name: 'todo2', desc: 'tooooooooodddddd2' },
  ],
};
export const data2 = [
  {
    lundi: [
      { todo1: [{ desc: 'kjnd' }, { date: 'kjf' }] },
      { todo2: [{ desc: 'kjnd' }, { date: 'kjf' }] },
    ],
    id: 'kljsdlkjhgsd',
  },
  {
    mardi: [
      { todo1: [{ desc: 'kjnd' }, { date: 'kjf' }] },
      { todo2: [{ desc: 'kjnd' }, { date: 'kjf' }] },
    ],
    id: 'lkjsndkgjnsd',
  },
];
export const data3 = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Nothing to begin' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      taskIds: ['task-1'],
    },
  },
  columnOrder: ['column-1'],
};
