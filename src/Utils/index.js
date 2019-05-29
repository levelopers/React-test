import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux';
import configureMockStore from 'redux-mock-store'
import rootReducer from '../redux/reducers';
import { middlewares } from '../createStore';

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
}

export const findByTestAtrr = (component, attr) => {
  return component.find(`[data-test='${attr}']`)
}

export const testStore = (initialState) => {
  const mockStore = configureMockStore(middlewares)
  return mockStore(rootReducer, initialState);
};