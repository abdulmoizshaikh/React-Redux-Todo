import * as actionTypes from './actions';


export const onChangeAc = (ev) => {  //onchange ActionCreaters 
    return {
        type: actionTypes.ON_CHANGE,
        ev: ev
    }
}

export const onAddAc = () => {
    return {
        type: actionTypes.ADD
    }
}

export const onDeleteAc = (ind) => {
    return {
        type: actionTypes.DELETE,
        ind: ind
    }
}


export const onEditAc = (itm, ind) => {
    return {
        type: actionTypes.EDIT,
        payload: { itm: itm, ind: ind }
    }
}

export const onUpdateAc = () => {
    return {
        type: actionTypes.ON_UPDATE
    }
}