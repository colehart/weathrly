import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrWeather from './CurrWeather';


describe('CurrWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrWeather />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should store current location', () => {
    const currLocation = wrapper.state().currentLocation

    expect(currLocation).toEqual('Louisville, KY');
  })

});