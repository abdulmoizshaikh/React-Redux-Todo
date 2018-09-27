import React from 'react';
import { Link } from 'react-router-dom';
// import classes from './LogIn.css';


const Error = (props) => {
    const style = {
        textAlign: "center"
    }

    return (
        <div style={style} >
            <h1>Error Page ! 404</h1>
            <p> Oops ! you have not routed perfectly.</p>
            <Link to="/"><small>Signup Page </small></Link> <br/>
            <Link to="/signin"><small>SignIn page.</small></Link>
        </div>

    )

}

export default Error;



