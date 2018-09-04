const initialState = {
  todos: [
    {
      completed: true,
      completedAt: null,
      _id: '5b8d6e7fe9b6990014f8f990',
      text: 'Eat something',
      _creator: '5b8d6e2de9b6990014f8f98d',
      __v: 0
    }
  ]
};

export default function(state = initialState, action) {
  return {
    ...state
  };
}
