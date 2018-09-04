import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    /*
        var a = {};
        a.age = 10;
        a.isStudent = true;
    
        var b = {...a};
        b.age = 100;
        console.log(a);
        console.log(b); 
    */

    /*
        var c = [1,2,3];
        var d = [...c];
        d[0] = 100;
        console.log(c);
        console.log(d);
    */
    /*
        var a = {
          num: [1,2,3,4],
          status: true
        }
    
        var b = {
          ...a, // {...a} means that you got everything from a
          abc: false, // means that add abc attribute. right now, b got 3 attribute are num, status, abc. 
          status: false// update attribute status of variable b. Because of the name is the same with variable a.
        }
        
        var c = {
          ...a,
          num: [...a.num, 100] // add last element that value is 100. 
        } // Now, c gets num: [1,2,3,4,100], and status: true
    
    
        console.log(a)
        console.log(c)
    */

    var redux = require('redux');
    var oldState = {
      num: ["man hinh", 'chuot', "ban phims"],
      editStatus: false
    }
    var reducer1 = (state = oldState, action) => { // reducer always returns a state
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return { ...state, editStatus: !state.editStatus }
        case "ADD_NEW":
          return { ...state, num: [...state.num, action.newItem] }
        case "DEL":
          return { ...state, num: state.num.filter((value, index) => index !== action.index) }
        // loc nhung phan tu ko trung voi tham so dc truyen vao            
        default:
          break;
      }
      return state;
    }

    var store1 = redux.createStore(reducer1);
    // console.log(store1.getState());
    store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
    // console.log(store1.getState());


    store1.dispatch({
      type: "ADD_NEW",
      newItem: "head phone"
    })
    // console.log(store1.getState());

    store1.dispatch({
      type: "DEL",
      index: 2
    })
    // console.log(store1.getState());
    store1.subscribe(() => {
      console.log(store1.getState())
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
