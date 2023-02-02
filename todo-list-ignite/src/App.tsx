import { Header } from './components/Header/Header'
import { Tasks } from './components/Tasks/Tasks'
import '../src/styles/global.css'
import { useState } from 'react'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted:true,
    },
    {
      id: "teste 2",
      title: "teste",
      isCompleted:false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <>
    <Header onAddTask={addTask} />
    <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </>
  )
}

export default App
