import React, { Component } from 'react';
import firebase from 'firebase';
import { Link, withRouter } from 'react-router-dom';
import Todo from '../Todo/Todo';
// import classes from './SignUp.css';


class SignUp extends Component {
    state = {
        username: '',
        emailAddress: '',
        password: '',
    }

    onInputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSignupHandler = () => {
        let user = {
            username: this.state.username,
            emailAddress: this.state.emailAddress,
            password: this.state.password
        }

        firebase.auth().createUserWithEmailAndPassword(user.emailAddress, user.password)
            .then((success) => {
                console.log(success, "success");
                setInterval(() => { alert("Congrats YOu have successfully SignedUp."); clearInterval(); }, 3000)
                this.props.history.push('/signin');
            })
            .catch((error) => {
               var ci= setInterval(() => { alert(error.message); clearInterval(ci) }, 3000)
            })

    }

    render() {
        const style = {
            textAlign: "center"
        }
        const signUp = <div style={style} >
            <h1>SIGNUP PAGE</h1>
            <div>
                <label>Username      :</label> <input type="text" name="username" value={this.state.username} onChange={this.onInputChangeHandler} /><br />
                <label>Email Address :</label> <input type="email" name="emailAddress" value={this.state.emailAddress} onChange={this.onInputChangeHandler} /><br />
                <label>Password      :</label> <input type="password" name="password" value={this.state.password} onChange={this.onInputChangeHandler} /><br />
                <button onClick={this.onSignupHandler}  >SignUp</button>
            </div>
            <Link to="/signin"><small>already member</small></Link>
        </div>;


        return JSON.parse(localStorage.getItem("signind")) ? <Todo /> : signUp;
        // return this.state.check ? <Todo /> : signUp

    }
}
export default withRouter(SignUp);





