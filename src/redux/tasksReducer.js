import {CREATE_TASK, DELETE_TASK, DONE_TASK, MARK_TASK} from "./actionTypes";

export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    marked: false,
                    done: false
                }
            ];
        case MARK_TASK:
            return state.map(el =>
                el.id === action.id ? {...el, marked: !el.marked} : el
            );
        case DELETE_TASK:
            return state.filter(el => el.id !== action.id);
        case DONE_TASK:
            return state.map(el =>
                el.id === action.id ? {...el,done: !el.done} : el
            );
        default:
            return state;
    }
};
