import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TodoListContainer } from '../src/components';
import { TodoList } from "../src/components";
import { InputArea } from "../src/components";
// import Adapter from 'enzyme-adapter-react-15';


describe('TodoListContainer', () => {
    it('should render InputArea and TodoList', () => {
        const wrapper = shallow(<TodoListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea/>,
            <TodoList/>
        ])).to.equal(true);
    });
});