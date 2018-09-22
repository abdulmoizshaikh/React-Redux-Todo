import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    input: '',
    todoList: localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [],

    edit: {
        index: "",
        flag: false,
    },
    done: {
        index: "",
        flag: false
    }
}

const onChange = (state, action) => {
    state.input = action.ev.target.value;
    return updateObject(state, { input: action.ev.target.value });
}

const add = (state, action) => {
    // action.ev.preventDefault();
    let todoList, input, lsTodoList;
    if (state.input) {
        input = state.input;
        todoList = [...state.todoList];
        todoList.push(input);
        localStorage.setItem("item", JSON.stringify(todoList));
        lsTodoList = JSON.parse(localStorage.getItem("item"));
        // action.inputRef.current.focus();
        return updateObject(state, { todoList: lsTodoList, input: "" });

    } else {
        alert("Please Write your task !!!");
        return state;
    }
}

const deleteHandler = (state, action) => {
    let todoList, lsTodoList;
    todoList = [...state.todoList];
    todoList.splice(action.ind, 1);
    localStorage.setItem("item", JSON.stringify(todoList));
    lsTodoList = JSON.parse(localStorage.getItem("item"));
    return updateObject(state, { todoList: lsTodoList });
}

const edit = (state, action) => {
    let index, currentNode;
    currentNode = [...state.todoList];
    index = action.payload.ind;
    currentNode = currentNode[index];
    return updateObject(state, { input: currentNode, edit: { index: index, flag: true } });
}

const update = (state, action) => {
    let input, index, todoList, lsTodoList;
    input = state.input;
    index = state.edit.index;
    todoList = [...state.todoList];
    todoList[index] = input;
    localStorage.setItem("item", JSON.stringify(todoList));
    lsTodoList = JSON.parse(localStorage.getItem("item"));
    return updateObject(state, { todoList: lsTodoList, input: "", edit: { flag: false } });

}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ON_CHANGE:
            return onChange(state, action);

        case actionTypes.ADD:
            return add(state, action);

        case actionTypes.DELETE:
            return deleteHandler(state, action);

        case actionTypes.EDIT:
            return edit(state, action);

        case actionTypes.ON_UPDATE:
            return update(state, action);

        default:
            return state;

    }
}

export default reducer;