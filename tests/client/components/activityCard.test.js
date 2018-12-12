import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


import {ActivityCard} from '../../../client/components/ActivityCard'

configure({adapter: new Adapter()})

test('<ActivityCard /> matches the last snapshot', () => {
  const renderer = new ShallowRenderer()
  const actual = renderer.render(<ActivityCard smiles={[]}/>)
  expect(actual).toMatchSnapshot()
})

