import React from 'react';
import Button from '../Button/Button';
import classes from './ListItems.css';

const listItems = (props) => {
    return (
        <div className={classes.ListItems} >
            <div onClick={props.clickedText}>   
                <div className={classes.ItemContent}>
                    {props.payload}
                </div>
            </div>
            <div className={classes.ItemButtons}>
                <Button btnType="Edit" clicked={props.clickedEdit}><i className="fas fa-pencil-alt"></i></Button>
                <Button btnType="Danger" clicked={props.clickedDelete}><i className="fas fa-trash-alt"></i></Button>
            </div>
        </div>
    )
}
export default listItems;