import React from 'react';
import {shallow, mount} from "enzyme";
import NoMatch from '../src/components/NoMatch';

it('should render text as "404', () => {
  const wrapper = shallow(<NoMatch />);
  expect(wrapper.text()).toContain('404');
});
