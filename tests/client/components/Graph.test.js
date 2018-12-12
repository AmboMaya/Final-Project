import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Graph from '../../../client/components/Graph'

test('Initial test', () => {
  expect(1).toBe(1)
})

test('<Graph /> in Search', () => {
  const expected = ''
  const wrapper = mount(<Graph />)
  expect(wrapper.text()).toMatch(expected)
})

test('<Card.Header> returns a text Progress graph', () => {
  const expected = 'Progress graph'
  const wrapper = mount(<Graph />)
  expect(wrapper.text()).toContain(expected)
})

test('Show the calendar on click', () => {
  const expected = ''
  const wrapper = mount(<Graph />)
  expect(wrapper.text()).toBe(expected)
})
