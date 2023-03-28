import { useState } from 'react'
import AddIcon from '../../assets/addIcon.svg'
import Clipborad from '../../assets/Clipboard.svg'
import {ContainerTask} from "./styles";



interface Task {
    text: string
    id: Date
}
export function TaskForm() {
    const [task, setTask] = useState('')
    const [newTask, setNewtask] = useState<string[]>([])
    const [isEmpty, setIsEmpty]=useState(true)
    function handleAddNewTask(event: any) {
        event.preventDefault()
        if (task !== '') {
            setNewtask((state) => [...state, task])
            setTask('')
            setIsEmpty(false)
        }

    }
    return (
        <ContainerTask>
            <form action="" onSubmit={handleAddNewTask}>
                <input type="text" placeholder="Adicione uma nova tarefa"
                    onChange={(state) => setTask(state.target.value)} value={task} />
                <button type="submit">Criar<img src={AddIcon} alt="" /></button>

            </form>
            {isEmpty?
                <ContainerTask>
                    <img src={Clipborad} alt=".."/>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                 </ContainerTask> :
                <div>
                    <ul>
                        {newTask.map(task => <li key={task}>{task}</li>)}

                    </ul>
                </div>
              }

        </ContainerTask>
    )
}