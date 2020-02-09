import React from 'react';
import Task from "../task-component/task";

const Tasks = ({tasks}) => {
  return (
    <>
      {
        tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}/>
          )
        })
      }
    </>
  );
};

export default Tasks;
