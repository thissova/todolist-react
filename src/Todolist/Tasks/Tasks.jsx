import React, {useState} from "react";
import styles from "./Tasks.module.scss"
import editButton from "../../assets/editButton.png"
import deleteButton from "../../assets/deleteButton.png"
import DescriptionForm from "./DescriptionForm/DescriptionForm";

const Tasks = ({tasks, updateTask}) => {
    let [editMode, setEditMode] = useState(false)
    let [editTask, setEditTask] = useState(null)
    const onSubmit = (data) => {
        console.log(data)
        setEditMode(false)
        debugger
        updateTask(data.description, editTask)
    }
    return tasks.map(t => <div className={styles.task}>
        <div className={styles.taskTitle}>
            <input type={"checkbox"}/>
            <span className={styles.title}>{t.title}</span>
        </div>
        <div className={styles.aboutTask}>
            {editMode && editTask === t.id?
                <DescriptionForm deactivateEditMode={onSubmit} task={t} editMode={editMode}/> :
                <div><span className={styles.description}>{t.description}</span>
                <img alt={"deleteButton"} src={deleteButton} className={styles.deleteButton}/>
                <img alt={"editButton"} src={editButton} className={styles.editButton} onClick={() => {
                    setEditMode(true)
                    setEditTask(t.id)
                }}/>
                </div>
                }

        </div>
    </div>)
}

export default Tasks