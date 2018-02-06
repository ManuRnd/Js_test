import React, { Component } from 'react';

export class InputArea extends Component {
    render() {
        return <input/>
    }
}

export class TodoList extends Component {
    render() {
        return <ul/>
    }
}
export class TodoListContainer extends Component{
    constructor(){
        super();
        this.state={todos:[]};
    }
    render(){
        return (
            <div>
            <InputArea/>
            <TodoList/>
        </div>
        )
    }
}
