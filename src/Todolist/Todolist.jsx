import React from "react";
import styles from "./TodolistCard.module.scss"
import Tasks from "./Tasks/Tasks";
import {connect} from "react-redux";
import {deleteTask, updateTask} from "../BLL/todolist-reducer";

const Todolist = ({tasks, updateTask, deleteTask}) => {
    return (<div className={styles.card}>
        <h1>
            <div className={styles.title}>TodoList:</div>
        </h1>
        <Tasks tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        tasks: state.todolist.tasks
    }
}
const TodolistContainer = connect(mapStateToProps, {updateTask, deleteTask})(Todolist)

export default TodolistContainer