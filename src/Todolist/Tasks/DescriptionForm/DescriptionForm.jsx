import React from "react";
import {useFormik} from "formik"
import styles from "./DescriptionForm.module.scss"
import deleteButton from "../../../assets/deleteButton.png";
import saveButton from "../../../assets/saveButton.png";
import {validateForEditTask as validate} from "../../../utils/validators";
const DescriptionForm = ({task, deactivateEditMode, deleteTask}) => {
    const formik = useFormik({
        initialValues: {
            description: task.description
        },
        validate,
        onSubmit: values => {
            deactivateEditMode(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className={styles.mainForm}>
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
            <button type={"submit"} className={styles.saveButton}><img alt={"editButton"} src={saveButton} className={styles.save} /></button>
            {formik.errors.description? <div className={styles.error}>{formik.errors.description}</div> : null}
        </form>
    )
}

export default DescriptionForm