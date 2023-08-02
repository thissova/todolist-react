import React from "react";
import styles from "./TodolistCard.module.scss"
import Tasks from "./Tasks/Tasks";
import {connect} from "react-redux";

const Todolist = ({tasks}) => {
    return (<div className={styles.card}>
        <h1>
            <div className={styles.title}>TodoList:</div>
        </h1>
        <Tasks tasks={tasks}/>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        tasks: state.todolist.tasks
    }
}
const TodolistContainer = connect(mapStateToProps)(Todolist)

export default TodolistContainer