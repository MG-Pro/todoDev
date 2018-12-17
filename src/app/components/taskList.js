export default ({tasks: tasks}) => (
  <ul>
    {tasks.map(task =>
      <li key={task.id}>
        {task.text}
      </li>
    )}
  </ul>
);
