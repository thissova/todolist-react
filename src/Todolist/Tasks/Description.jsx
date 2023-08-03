import React from "react";
import styles from "./Tasks.module.scss";
import deleteButton from "../../assets/deleteButton.png";
import editButton from "../../assets/editButton.png";

const Description = ({task, deleteTask, activateEditMode, setEditTask}) => {
    return(
        <div><span>{task.description}</span>
            <img alt={"deleteButton"} src={deleteButton} className={styles.deleteButton} onClick={(() => deleteTask(task.id))}/>
            <img alt={"editButton"} src={editButton} className={styles.editButton} onClick={() => {
                activateEditMode()
                setEditTask(task.id)
            }}/>
        </div>
    )
}

export default Description