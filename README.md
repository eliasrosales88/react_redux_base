# README  
## Install  

    npm install  

## Patrón Redux  
index.js  

```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import registerServiceWorker from './registerServiceWorker';

    // REDUX IMPORTS
    import { Provider } from 'react-redux';
    import { createStore } from 'redux';
    import reducer from "./store/reducer";

    // REDUX CREATE STORE
    const store = createStore(reducer);

    ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
```  

store/actions.js

```js
export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
```

store/reducer.js

```js
import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state;
};

export default reducer;
```