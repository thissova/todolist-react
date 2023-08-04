import React from "react";
import styles from "./TodolistCard.module.scss"
import Tasks from "./Tasks/Tasks";
import {connect} from "react-redux";
import {createTask, deleteTask, updateTask} from "../BLL/todolist-reducer";
import CreateTask from "./CreateTask/CreateTask";

const Todolist = ({tasks, updateTask, deleteTask, createTask}) => {
    return (<div className={styles.card}>
        <h1>
            <div className={styles.title}>TodoList:</div>
        </h1>
        <CreateTask createTask={createTask}/>
        <Tasks tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        tasks: state.todolist.tasks
    }
}
const TodolistContainer = connect(mapStateToProps, {updateTask, deleteTask, createTask})(Todolist)

export default TodolistContainer