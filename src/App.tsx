import { Header } from "./components/Header"
import { TaskForm } from "./components/Task"
import './global.css'


export function App() {

  return (
    <div className="App">
      <Header isActive={false} />
      <TaskForm />
    </div>
  )
}

