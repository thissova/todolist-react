import React from "react";
import styles from "./CreateTask.module.scss"
import {useFormik} from "formik";
import saveButton from "./../../assets/saveButton.png"
import {validateForCreateTask as validate} from "../../utils/validators";

const CreateTask = ({createTask}) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        validate,
        onSubmit: values => {
            createTask(values.title, values.description)
            values.title = ""
            values.description = ""
        },
    })
    return (
        <form className={styles.createTask} onSubmit={formik.handleSubmit}>
            <div className={styles.taskTitle}>
                <label htmlFor="description" className={styles.title}>Task Title: </label>
                <input
                    id="title"
                    name="title"
                    type=""
                    placeholder={"Type here"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    className={styles.titleInput}
                />
                {formik.errors.title? <div className={styles.error}>{formik.errors.title}</div> : null}
            </div>
            <div className={styles.aboutTask}>
                <label htmlFor="description" className={styles.title}>Task description: </label>
                <input
                    id="description"
                    name="description"
                    type=""
                    placeholder={"Type here"}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={styles.input}
                />
                <button className={styles.saveButton}><img alt={"save"} src={saveButton} className={styles.save}/></button>
                {formik.errors.description? <div className={styles.error}>{formik.errors.description}</div> : null}
            </div>
        </form>
    )
}

export default CreateTask