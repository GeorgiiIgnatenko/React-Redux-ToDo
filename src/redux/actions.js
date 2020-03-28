import {CREATE_TASK, DELETE_TASK, DONE_TASK, MARK_TASK} from "./actionTypes";

export function createTask({title,id}) {
    return{
        type: CREATE_TASK,
        id,
        title
    }
}

export function markTask(id) {
    return {
        type: MARK_TASK,
        id
    }
}

export function deleteTask (id){
    return{
        type: DELETE_TASK,
        id
    }
}

export function doneTask (id){
    return{
        type: DONE_TASK,
        id
    }
}