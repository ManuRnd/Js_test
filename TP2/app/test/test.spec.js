import React from 'react';
import { expect,assert } from 'chai';
import { shallow, mount, render, configure } from 'enzyme';
import { TodoListContainer, InputArea, TodoList } from '../src/components';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });

describe('TodoListContainer', () => {
    it('should render InputArea and TodoList', () => {
        const wrapper = shallow(<TodoListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea/>,
            <TodoList/>
        ])).to.equal(true);
    });

    it('state test',()=>{
        const container= shallow(<TodoListContainer/>);
        expect(container.state('todos')).to.eql([]);
    });
    it('addItem',()=>{
        const container= shallow(<TodoListContainer/>);
        container.instance().addItem('TOTO');
        expect(container.state('todos')).to.eql(['TOTO']);
    });

    it('submit',()=>{
        const input=shallow(<InputArea/>);
        const add=input.instance().addItem;
        expect(input.prop("onSubmit")).to.eql(add);
    });

    it('binding',()=>{
        const container=shallow(<TodoListContainer/>);
        const onsub=container.find('InputArea').prop('onSubmit');
        onsub('Bonjour');
        expect(container.state('todos')).to.eql(['Bonjour']);
    });
});

describe('InputArea', () => {
    it('should render InputArea and TodoList', () => {
        const wrapper = shallow(<InputArea/>);
        expect(wrapper.containsAllMatchingElements([
            <input/>,
            <button>Add</button>
        ])).to.equal(true);
    });
    it('form', () => {
        const wrapper = shallow(<InputArea/>);
        const input = wrapper.find('input');
        input.simulate('change',{target : {value : 'text'}});

        expect(wrapper.state('text')).to.eql('text');

    });

    it('Validate Submit', () => {

        const addItemSpy = spy();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
        wrapper.setState({text:'text'});
        const button= wrapper.find('button');

        button.simulate('click');
        expect(addItemSpy.calledOnce).to.eql(true);
        expect(addItemSpy.calledWith('text')).to.equal(true);
    });
});