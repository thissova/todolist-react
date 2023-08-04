import React, {useState} from "react";
import styles from "./Tasks.module.scss"
import DescriptionForm from "./DescriptionForm/DescriptionForm";
import Description from "./Description";

const Tasks = ({tasks, updateTask, deleteTask}) => {
    let [editMode, setEditMode] = useState(false)
    let [editTask, setEditTask] = useState(null)
    const deactivateEditMode = (data) => {
        setEditMode(false)
        updateTask(data.description, editTask)
    }
    const activateEditMode = () => {
        setEditMode(true)

    }
    return tasks.length ? tasks.map(task => <div className={styles.task}>
            <div className={styles.taskTitle}>
                <input disabled={editMode && editTask === task.id} key={task.id + " checkbox"} type={"checkbox"}
                       onChange={(event) => {
                           if (event.target.checked) {
                               setTimeout(() => deleteTask(task.id), 1000)
                           }
                       }}/>
                <span className={styles.title}>{task.title}</span>
            </div>
            <div className={styles.aboutTask}>
                {editMode && editTask === task.id ?
                    <DescriptionForm deactivateEditMode={deactivateEditMode} task={task} deleteTask={deleteTask}/> :
                    <Description activateEditMode={activateEditMode} task={task} deleteTask={deleteTask}
                                 setEditTask={setEditTask}/>
                }
            </div>
        </div>
    ) : <div className={styles.noTasks}> There is no one task</div>
        }



export default Tasks