import React from "react";
import styles from "./Tasks.module.scss"
const Tasks = ({tasks}) => {
    return Object.keys(tasks).map(t => <div className={styles.task}>
        <div className={styles.taskTitle}>
            <input type={"checkbox"} />
            {t}
        </div>
        <div className={styles.aboutTask}>
            {tasks[t]}
        </div>
    </div>)
}

export default Tasks