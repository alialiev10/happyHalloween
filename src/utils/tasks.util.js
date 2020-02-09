import taskKingsImg from "../assets/images/task-kings.png";
import taskTimeImg from "../assets/images/task-time.png";
import taskTournamentsImg from "../assets/images/task-tournaments.png";

const taskConfig = {
  kings: {
    img: taskKingsImg,
    description: 'Выйграть три игры, разложив всех королей',
  },
  time: {
    img: taskTimeImg,
    description: 'Выйграть три игры, каждую менее чем за 3 минуты',
  },
  tournaments: {
    img: taskTournamentsImg,
    description: 'Выйграть пять турниров подряд',
  },
};

const tasksUtil = {
  taskConfig,
};

export default tasksUtil;
