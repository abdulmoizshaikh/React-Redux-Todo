import React, { Component } from 'react';
import classes from './Todo.css';
import ListItems from '../../components/ListItems/ListItems';
import Button from '../../components/Button/Button';
import SignUp from '../SignUp/SignUp';
// Applying Redux
import { connect } from 'react-redux';
import * as actionCreater from '../../store/actions/index';
import { Link } from 'react-router-dom';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.inputref = React.createRef();

    }
    // componentDidMount = () => {
    //     this.inputref.current.focus();
    // }

    setFlag = () => {
        localStorage.setItem("signind", false);
    }

    render() {

        let addBtn, saveBtn;
        addBtn = <Button btnType="Success" clicked={this.props.onAddHandler.bind(this, this.inputref)}>Done <i className="fas fa-thumbs-up"></i></Button>;
        saveBtn = <Button btnType="Save" clicked={this.props.onUpdateHandler.bind(this)}>Update <i className="fas fa-check-circle"></i></Button>;

        const todo = <div className={classes.Todo}>
            <Link to="/" ><span onClick={this.setFlag} style={{ fontSize: "1.5em", color: "red" }}>Logout</span></Link>
            <div className={classes.heading}>
                <h1 className={classes.H1}>ReactJs TodoList <i className="fas fa-clipboard-list"></i></h1>
            </div>
            <div className={classes.inputPlusBtn}>
                <input ref={this.inputref} placeholder="Write your task here ..." className={classes.inputTag} type="text" onChange={this.props.onChangeHandler} value={this.props.state.input} />

                {/* <input ref={this.inputref} placeholder="Write your task here ..." className={classes.inputTag} type="text" onChange={this.props.onChangeHandler} value={this.props.state.input} /> */}
                {this.props.state.edit.flag ? saveBtn : addBtn}
            </div>
            <div className={classes.listItems}>
                {this.props.state.todoList.map((item, index) => (
                    <ListItems
                        clickedEdit={this.props.onEditHandler.bind(this, item, index, this.inputref)}
                        clickedDelete={this.props.onDeleteHandler.bind(this, index)}
                        key={item + index}
                        payload={item}
                        index={index}
                        // clickedText={this.onClickTextHandler.bind(this, index)}
                        state={this.props.state}
                    />
                ))}
            </div>
        </div>;

        return JSON.parse(localStorage.getItem("signind")) ? todo : <SignUp/>;
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeHandler: (ev) => dispatch(actionCreater.onChangeAc(ev)),
        onAddHandler: (ev, inputRef) => dispatch(actionCreater.onAddAc(ev, inputRef)),
        onDeleteHandler: (ind) => dispatch(actionCreater.onDeleteAc(ind)),
        onEditHandler: (itm, ind, inputref) => dispatch(actionCreater.onEditAc(itm, ind, inputref)),
        onUpdateHandler: () => dispatch(actionCreater.onUpdateAc()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);




