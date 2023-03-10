import { useState } from 'react'
import AddIcon from '../../assets/addIcon.svg'

export function TaskForm() {
    const [task, setTask] = useState('')
    const [newTask, setNewtask] = useState<string[]>([])
    function handleAddNewTask(event: any) {
        event.preventDefault()
        setNewtask((state) => [...state, task])

    }
    return (
        <>
            <form action="" onSubmit={handleAddNewTask}>
                <input type="text" placeholder="Adicione uma nova tarefa"
                    onChange={(state) => setTask(state.target.value)} />
                <button type="submit">Criar<img src={AddIcon} alt="" /></button>

            </form>
            <ul>
                {newTask.map(task => <li key={task}>{task}</li>)}

            </ul>
        </>
    )
}