import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrWeather from './CurrWeather';
import data from './MockData';

describe('CurrWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrWeather data={data}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should store current location', () => {
    const currLocation = wrapper.currentLocation

    expect(currLocation).toEqual('Louisville, KY');
  })

});