let nextTaskId = 0;

export default text => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  text
});
