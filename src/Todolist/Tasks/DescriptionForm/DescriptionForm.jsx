import React from "react";
import {useFormik} from "formik"
import styles from "./DescriptionForm.module.scss"
import deleteButton from "../../../assets/deleteButton.png";
import saveButton from "../../../assets/saveButton.png";

const DescriptionForm = ({task, deactivateEditMode, deleteTask}) => {
    const formik = useFormik({
        initialValues: {
            description: task.description
        },
        onSubmit: values => {
            deactivateEditMode(values)
        },
    })
    return (
        <form>
            <label htmlFor="description">Task: </label>
            <input
                id="description"
                name="description"
                type=""
                onChange={formik.handleChange}
                value={formik.values.description}
                className={styles.input}
            />

            <img onClick={() => deleteTask(task.id)} alt={"deleteButton"} src={deleteButton} className={styles.deleteButton}/>
            <img onClick={formik.handleSubmit} alt={"editButton"} src={saveButton} className={styles.saveButton} />
        </form>
    )
}

export default DescriptionForm