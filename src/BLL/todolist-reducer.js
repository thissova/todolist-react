let generateId = () => (Math.random().toString(16).slice(2) + new Date().getTime().toString(36))
let initalState = {
    tasks: [{
        title: "Hello",
        description: "world",
        id: generateId()
    },
        {
            title: "Foo",
            description: "bar",
            id: generateId()
        }]
}
const ADD_TASK = "ADD_TASK"
const UPDATE_TASK = "UPDATE_TASK"
let todolistReducer = (state = initalState, action) => {
switch (action.type){
    case UPDATE_TASK:
        return {
            ...state,
            tasks: state.tasks.map((task) => ({
                ...task,
                description: task.id === action.id ? action.description: task.description
            }))
        }
    default:
        return state

}
}

export const updateTask = (description, id) => ({type: UPDATE_TASK, id, description})

export default todolistReducer