import App from './App';
import { shallow ,mount} from 'enzyme';
import { findByTestAtrr, testStore } from './Utils';
import { initalState } from './redux/reducers/posts/reducer'
import React from 'react';


const setUp = (initialState = { posts: initalState }) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

describe('App Component', () => {

  let wrapper;
  let SharedButton
  let AppInstance
  beforeEach(() => {
    wrapper = setUp();
    AppInstance = wrapper.instance()
    SharedButton = findByTestAtrr(wrapper, 'sharedButton').childAt(0).dive()
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('click <SharedButton> should hide the button', () => {
    const btn = findByTestAtrr(SharedButton, 'buttonComponent')
    expect(btn.length).toBe(1)
    btn.simulate('click')
    expect(AppInstance.state.hideBtn).toBeTruthy()
    expect(findByTestAtrr(wrapper, 'sharedButton').length).toBe(0)
  })
})



