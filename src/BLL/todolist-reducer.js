let generateId = () => (Math.random().toString(16).slice(2) + new Date().getTime().toString(36))
let initalState = {
    tasks: []
}
const CREATE_TASK = "CREATE_TASK"
const UPDATE_TASK = "UPDATE_TASK"
const DELETE_TASK = "DELETE_TASK"
let todolistReducer = (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => ({
                    ...task,
                    description: task.id === action.id ? action.description : task.description
                }))
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: [
                    {
                        title: action.title,
                        description: action.description,
                        id: generateId()
                    },
                    ...state.tasks,
                ]
            }
        default:
            return state

    }
}

export const createTask = (title ,description ) => ({type: CREATE_TASK, title, description})
export const updateTask = (description, id) => ({type: UPDATE_TASK, id, description})
export const deleteTask = (id) => ({type: DELETE_TASK, id})

export default todolistReducer