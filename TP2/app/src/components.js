import React, { Component } from 'react';

export class InputArea extends Component {
    constructor(props){
        super(props);
        this.state={text:''};
        this.setTexte=this.setTexte.bind(this);
        this.handleClick=this.handleClick.bind(this);

    }

    setTexte(ev){
        this.state.text=ev.target.value;
    }

    handleClick(){
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div>
            <input value={this.state.text} onChange={this.setTexte}/>
            <button onClick={this.handleClick}>Add</button>
            </div>
        )
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
        this.addItem=this.addItem.bind(this);
    }
    addItem(name){
        this.state.todos.push(name);
    }
    render(){
        return (
            <div>
            <InputArea onSubmit={this.addItem}/>
            <TodoList/>
        </div>
        )
    }

}

