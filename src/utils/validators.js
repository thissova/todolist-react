export const validateForCreateTask = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 50) {
        errors.title = 'Must be 50 characters or less';
    }

    if (values.description.length > 100) {
        errors.description = 'Must be 100 characters or less';
    }
    return errors;
};

export const validateForEditTask = values => {
    const errors = {};

    if (values.description.length > 100) {
        errors.description = 'Must be 100 characters or less';
    }
    return errors;
};

