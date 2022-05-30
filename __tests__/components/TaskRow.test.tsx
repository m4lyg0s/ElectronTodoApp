/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import enzyme, { mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import TaskRow from '../../src/components/TaskRow';
import { ITask } from '../../src/states/ITask';
import { deleteTask } from '../../src/actions/TaskActions';

/** テストのセットアップ */
// jest のセットアップファイルに書き出すことで、毎テスト書かなくても良い。
// https://jestjs.io/docs/ja/configuration#setupfiles-array
beforeAll(() => {
  enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });
});

const dispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => dispatch,
}));

jest.mock('../../src/actions/TaskActions');
/** テストのセットアップ ここまで */
describe('TaskRow', () => {
  const task: ITask = {
    complete: true,
    id: 'task001',
    taskName: 'task-name',
    expire: new Date(),
  };
  test('complete', () => {
    const wrapper = mount(<TaskRow data={task} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('click delete', () => {
    const wrapper = mount(<TaskRow data={task} />);
    const deleteButton = wrapper.find('div.deleteButton'); // --(a)
    deleteButton.simulate('click');
    expect(deleteTask).toBeCalledWith('task001', dispatch);
  });
});
