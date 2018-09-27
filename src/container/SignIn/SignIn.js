import React, { Component } from 'react';
import firebase from 'firebase';
import { Link, withRouter } from 'react-router-dom';
// import classes from './LogIn.css';



class SignIn extends Component {
    state = {
        emailAddress: '',
        password: '',
        // signined:localStorage.getItem("signined")?localStorage.getItem("signined"):false
    }

    onInputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSignInHandler = () => {
        let user = {
            emailAddress: this.state.emailAddress,
            password: this.state.password
        }

        firebase.auth().signInWithEmailAndPassword(user.emailAddress, user.password)
            .then((success) => {
                setTimeout(()=>{alert("Congrats YOu have successfully LoggedIn.")},3000)
                localStorage.setItem("signind",true);
                this.props.history.push("/");
            })
            .catch((error) => {
                // alert(error.message);
                console.log(error.message,"error message");
                localStorage.setItem("signind",false);                
            })
    }

    render() {
        const style = {
            textAlign: "center"
        }

        return (
            <div style={style} >
                <h1>SIGNIN PAGE</h1>
                <div>
                    <label>Email Address :</label> <input type="email" name="emailAddress" value={this.state.emailAddress} onChange={this.onInputChangeHandler} /><br />
                    <label>Password      :</label> <input type="password" name="password" value={this.state.password} onChange={this.onInputChangeHandler} /><br />
                    <button onClick={this.onSignInHandler}>SignIn</button>
                </div>
                <Link to="/"><small>not a member</small></Link>
            </div>

        )
    }
}
export default withRouter(SignIn);





