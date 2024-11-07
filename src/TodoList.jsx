import { v4 as uuidv4 } from 'uuid';
import './style.css'
import { useState } from "react"
export default function TodoList(){
    let [arr,setArr]=useState([{task:"Sample Task",id:uuidv4()}]);

    let [singleTask,setSingleTask]=useState("");

    let addTask=()=>{
        setArr((prevTodo)=>{
            return [...prevTodo,{task:singleTask,id:uuidv4()}]
        });
    }

    let addSingleTask=(event)=>{
        setSingleTask(event.target.value);
        singleTask[""];
    }

    let deleteTask=(id)=>{
        setArr(arr.filter((todo)=> todo.id!=id));
    }

    let upperCase=()=>{
       setArr((preTodo)=>
        preTodo.map((todo)=>{
            return{
                ...todo,task:todo.task.toUpperCase()
            };
        })
    );
    };

    let upperCaseOne=(id)=>{
        setArr((preTodo)=>
            preTodo.map((todo)=>{
                if(todo.id===id){
                    return{
                        ...todo,task:todo.task.toUpperCase()
                    };
                }
                else{
                    return todo;
                }
            })
        );
    }

    return(
        <div>

        <label htmlFor="task">Type Your Task</label>
        <input type="text"  id="task" value={singleTask} onChange={addSingleTask} />
        <button onClick={addTask}>Add Task</button>

        <h3>Todo List</h3>
        <div className='listDiv'>
        <ul>
            {
                arr.map((todo)=>(
                <li key={todo.id}><span>{todo.task}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={()=>deleteTask(todo.id)}>Delete</button>
                
                <button onClick={()=>upperCaseOne(todo.id)}>UpperCase</button>
                </span></li>
                ))
            }
        </ul>
        </div>

        <br /><br /><br /><br /><br />

        <button onClick={upperCase}>UpperCase</button>

        </div>
    )
}