import React from 'react';
import { expect,assert } from 'chai';
import { shallow, mount, render, configure } from 'enzyme';
import { TodoListContainer, InputArea, TodoList } from '../src/components';
import Adapter from 'enzyme-adapter-react-16';

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
    })
});