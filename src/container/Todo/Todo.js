import React, { Component } from 'react';
import classes from './Todo.css';
import ListItems from '../../components/ListItems/ListItems';
import Button from '../../components/Button/Button';
// Applying Redux
import { connect } from 'react-redux';
import * as actionCreater from '../../store/actions/index';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.inputref = React.createRef();
    }
    componentDidMount = () => {
        this.inputref.current.focus();
    }

    render() {
        let addBtn, saveBtn;
        addBtn = <Button btnType="Success" clicked={this.props.onAddHandler.bind(this, this.inputref)}>Done <i className="fas fa-thumbs-up"></i></Button>;
        saveBtn = <Button btnType="Save" clicked={this.props.onUpdateHandler.bind(this)}>Update <i className="fas fa-check-circle"></i></Button>;

        return (
            <div className={classes.Todo}>
                <div className={classes.inputPlusBtn}>
                    <input ref={this.inputref} placeholder="Write your task here ..." className={classes.inputTag} type="text" onChange={this.props.onChangeHandler} value={this.props.state.input} />
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

            </div>
        );
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







// constructor(props) {
    //     super(props);
    //     this.inputref = React.createRef();
    // }

    // componentDidMount = () => {
    //     this.inputref.current.focus();
    // }

    // state = {
    //     input: '',
    //     todoList: [],

    //     edit: {
    //         index: "",
    //         flag: false,
    //     },
    //     done: {
    //         index: "",
    //         flag: false
    //     }
    // }

    // onChangeHandler = (ev) => {
    //     this.setState({
    //         input: ev.target.value
    //     })

    // }

    // onAddHandler(ev) {
    //     ev.preventDefault();
    //     if (this.state.input) {
    //         let input, todoList;
    //         input = this.state.input;
    //         todoList = [...this.state.todoList];
    //         todoList.push(input);
    //         this.setState({ todoList: todoList, input: "" });
    //         this.inputref.current.focus();
    //     }
    //     else {
    //         alert("Please Write your task !!!");
    //         this.inputref.current.focus();
    //     }
    // }

    // onDeleteHandler = (ind) => {
    //     let todoList = [...this.state.todoList];
    //     todoList.splice(ind, 1);
    //     this.setState({ todoList: todoList });
    //     this.inputref.current.focus();
    // }

    // onEditHandler = (item, index) => {
    //     this.inputref.current.focus();
    //     let currentNode = [...this.state.todoList];
    //     currentNode = currentNode[index];
    //     this.setState({ input: currentNode, edit: { index: index, flag: true } });
    //     // this.setState({ input: currentNode, index: index, flag: true });
    // }

    // onSaveHandler = () => {
    //     let input, ind, todoList;
    //     input = this.state.input;
    //     ind = this.state.edit.index;
    //     todoList = [...this.state.todoList];
    //     todoList[ind] = input;
    //     this.setState({ todoList: todoList, input: "", edit: { flag: false } });
    //     this.inputref.current.focus();
    // }

    // onClickTextHandler = (ind) => {
    //     let todoList;
    //     todoList = [...this.state.todoList];
    //     this.setState({ done: { flag: true } });
    //     todoList[ind] = <div className={classes.ItemContent}>
    //         <del>{todoList[ind]}</del>
    //     </div>;
    //     this.setState({ todoList: todoList });
    // }

    // this.setState({ done: { index: index, flag: !this.state.done.flag } });