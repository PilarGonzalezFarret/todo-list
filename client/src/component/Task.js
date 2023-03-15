import { useState } from "react";
import './Task.css';

const Task = () => {
    //var taskList = ["Comprar", "Vender", "Cargar"]
    const [taskList, setTaskList] = useState(
        [
            {
                nombre: "caminar",
                terminada: true
            },
            {
                nombre: "correr",
                terminada: false
            }
        ]
    );

    const [nombre, setNombre] = useState("");

    const agregar = (e) => {
        e.preventDefault();
        var listTemp = [...taskList];

        var taskObj = {
            nombre: nombre,
            terminada: false
        }
        listTemp.push(taskObj);
        
        setTaskList(listTemp);
        setNombre("");
    }

    
    const escribiendo = (e) => {
        setNombre(e.target.value);
    }

    const eliminar = (index) => {
        console.log("eliminar: " + index);
        var listTemp = [...taskList];
        console.log("antes", listTemp);
        listTemp.splice(index, 1);
        console.log("después", listTemp);
        setTaskList(listTemp);
    }
    
    const darCheck= (index) => {
        var listTemp = [...taskList];
        var newValue = (listTemp[index].terminada == true) ? false : true;
        listTemp[index].terminada = newValue;
        setTaskList(listTemp);
        console.log(listTemp[index].terminada);
    }

    return (
        <div>
            <form onSubmit={agregar}>
                <input type="text" name="nombre" id="nombre" required={true} placeholder="Ingresar tarea" value={nombre} onChange={(e) => escribiendo(e)}/> 
                <button type="submit">Agregar</button>
            </form>
            <div>
                {
                    taskList.map((task, index) => {
                        return <div key={index}>
                            {/* {task.terminada ? "Terminada" : "Pendiente"} */}
                            <input type={"checkbox"} checked={task.terminada} onClick={() => darCheck(index)} />
                            <p className={( task.terminada ) ? "tachado" : "" }>Hoy voy a {task.nombre}</p>
                            <button onClick={() => eliminar(index)}>Eliminar</button>
                            <hr/>
                        </div>;
                    })
                }
            </div>
        </div>
    );
}

export default Task;