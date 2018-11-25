import React, { Component } from 'react';
// import ll from "./LinkedList";

class LinkedListComp extends Component {

  render() {
    return (
      <div className = "linkedlist">
        <h2>Linked List</h2>

        <div className = 'buttonGroup'>
          <button className = 'new-node'>New</button>
          <button className = 'add'>Add</button><br/>
        </div>
        <div className = 'textarea'>
          <textarea className = 'text' rows = '2' cols = '20'>
          </textarea>
          <textarea className = 'text' rows = '2' cols = '20'>
          </textarea><br/>
        </div>
        <div className = 'buttonGroup'>
          <button className = 'show'>Show All</button><br/>
        </div>
        <div className = 'textarea'>
          <textarea className = 'text' rows = '6' cols = '30'>
          </textarea>
        </div>
      </div>

    )
  }

}
export default LinkedListComp;
