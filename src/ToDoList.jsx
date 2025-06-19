import { useState } from "react"

export default function ToDoList(){
    const [tasks, setTask] = useState(["Makan Mie", "Pergi ke Kantin"]);
    const [newTask, setNewTask] = useState("");

    function handleAdd(){
        if (newTask.trim() === "") return;
        setTask(t => [...t , newTask]);
        setNewTask("");
    }

    function handleDelete(index){
        setTask(tasks.filter((_, i) => i !== index));
    }

    function handleChange(e){
        setNewTask(e.target.value);
    }

    function handleUp(index){
        if (index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] =
                [updateTasks[index - 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    function handleDown(index){
        if (index < tasks.length - 1) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] =
                [updateTasks[index + 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    return (
        <div className="bg-gray-500">
            <div className="flex justify-center items-center p-5">
                <input 
                    type="text" 
                    placeholder="Mau apa hari ini cuyy" 
                    onChange={handleChange}
                    value={newTask}     
                    className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
                    />
                <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl" onClick={handleAdd}>
                    ADD
                </button>

            </div>
            <ol className="flex flex-col m-5 justify-center items-center">
                {tasks.map((task, i) => (
                    <li key={i}>
                        <h1 className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
                        >
                            {task}  
                        </h1>
                        <button 
                        className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-red-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
                        
                        onClick={() => handleDelete(i)}>Delete</button>
                        <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
                         onClick={() => handleUp(i)}>Up</button>
                        <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
                         onClick={() => handleDown(i)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
