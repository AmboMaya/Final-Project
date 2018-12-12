import React from 'react'
import {shallow} from 'enzyme'

import Graph from '../../../client/components/Graph'

test('Graph renders progress graph text', () => {
  const expected = '<Graph />'
  const wrapper = shallow(<Graph />)
  expect(wrapper.text()).toBe(expected)
})
