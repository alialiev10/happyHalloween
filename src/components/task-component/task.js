import React, {useContext} from 'react';
import styles from "../task-component/task.module.scss";
import {Line} from "rc-progress";
import Button from "../button-component/button";
import {TasksContext} from "../../pages/home-page";


const Task = ({task: {id, img, progress, description}}) => {
  const {deleteTask} = useContext(TasksContext);
  return (
    <>
      <div key={id} className={styles.task}>
        <div className={styles['task-poster']}>
          <img src={img} alt="Tasks poster"/>
        </div>
        <div className={styles['task-description']}>
          <p className={styles['task-description-text']}>
            {description}
          </p>
          <div className={styles['task-description-progress-bar']}>
            <Line className={styles['progress-bar']}
                  percent={progress}
                  strokeWidth="6"
                  strokeColor="#899851"
                  trailColor="#4C4D49"
                  trailWidth="6"/>
          </div>
        </div>
        <div className={styles.btn}>
          {progress === 100 ? <Button action={() => deleteTask(id)}>Поставить рубашку</Button> : ''}
        </div>
      </div>
    </>
  );
};

export default Task;
