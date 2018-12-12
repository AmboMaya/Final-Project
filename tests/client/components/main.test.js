import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Main from '../../../client/components/Main'

configure({adapter: new Adapter()})

test('<Main />', () => {
  const expected = '<BrowserRouter />'
  const wrapper = shallow(<Main />)
  expect(wrapper.text()).toMatch(expected)
})

test('<Main /> matches the last snapshot', () => {
  const renderer = new ShallowRenderer()
  const actual = renderer.render(<Main />)
  expect(actual).toMatchSnapshot()
})
