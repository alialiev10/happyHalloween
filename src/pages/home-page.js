import React, {createContext, useEffect, useState} from 'react';
import styles from "./home-page.module.scss";
import Timer from "../components/timer-component/timer";
import * as axios from "axios";
import Tasks from "../components/tasks-component/tasks";
import taskTimeImg from '../assets/images/task-time.png';
import taskKingsImg from '../assets/images/task-kings.png';
import taskTournamentsImg from '../assets/images/task-tournaments.png';
import CircularProgress from "@material-ui/core/CircularProgress";
import {uuid} from 'uuidv4';
import dateUtil from "../utils/date.util";
import tasksUtil from "../utils/tasks.util";
import apiService from "../services/api.service";
import API_URLS from "../utils/api-urls.constant";

export const TasksContext = createContext({});

let timeoutId;

const HomePage = () => {
  const [date, setDate] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const res = await apiService.get(API_URLS.TASKS);

        setDate(dateUtil.getDifferenceBetweenDates(res.data.endsAt));
        setTasks(
          res.data.tasks.map(
            task => ({
              id: uuid(),
              ...task,
              ...tasksUtil.taskConfig[task.type],
            }),
          ),
        );
        setIsLoading(false);
      } catch {
        setDate(0);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    clearTimeout(timeoutId);

    if (date && date > 0) {
      timeoutId = setTimeout(() => {
        setDate(date - 1000);
      }, 1000);
    }
  }, [date]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return (
    <>
      <div className={styles['main-wrapper']}>
        <div className={`container ${styles.container}`}>
          <header>
            <div className={styles.logo}>
              <div className={styles.timer}>
                {date || date === 0 ? <Timer date={date}/> : null}
              </div>
            </div>
          </header>
          <div className={styles.tasks}>
            {
              isLoading ?
                <div className={styles.spinner}>
                  <CircularProgress
                    size={100}
                    color="inherit"/>
                </div> :
                <TasksContext.Provider value={{deleteTask}}>
                  <Tasks
                    tasks={tasks}
                  />
                </TasksContext.Provider>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
