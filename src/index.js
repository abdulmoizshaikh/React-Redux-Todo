import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';

//applying redux;
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/reducer';
import firebase from 'firebase';


// Initialize Firebase
var config = {
        apiKey: "AIzaSyAMDiwPwJblXGIpplPyV-oCo85BnZBslkc",
        authDomain: "moizeventapp.firebaseapp.com",
        databaseURL: "https://moizeventapp.firebaseio.com",
        projectId: "moizeventapp",
        storageBucket: "moizeventapp.appspot.com",
        messagingSenderId: "722135946241"
};
firebase.initializeApp(config);




const store = createStore(rootReducer);

ReactDOM.render(
        <Provider store={store}><Routing /></Provider>,
        document.getElementById('root'));
registerServiceWorker();