import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: "task-1", // ← MUDEI PARA STRING
        title: "Study React",
        description: "I did this App with React, and im still working on it!",
        isCompleted: false,
      },
      {
        id: "task-2", // ← MUDEI PARA STRING
        title: "Use TypeScript",
        description:
          "Im using TypeScript in my App! This can make secure about bugs.",
        isCompleted: false,
      },
      {
        id: "task-3", // ← MUDEI PARA STRING
        title: "This is a very nice App",
        description:
          "Uses React, Vite, React Router DOM, Hooks, UUID, TailWindCSS, Lucide React, JSONPlaceHolder, LocalStorage. Além de funcionalidades avançadas como: CRUD Completo, Persistência de dados, Integração com API's externas, Roteamento dinâmico, Componentização e Gerenciamento de estado",
        isCompleted: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
