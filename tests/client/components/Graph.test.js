import React from 'react'
import {mount} from 'enzyme'

import Graph from '../../../client/components/Graph'

test('Graph renders progress graph text', () => {
  const expected = 'Progress graph'
  const wrapper = mount(<Graph />)
  expect(wrapper.text()).toBe(expected)
})
