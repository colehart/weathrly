import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import data from './mockData';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather data={data}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should store current location', () => {
    const currLocation = wrapper.state().currentLocation

    expect(currLocation).toEqual('Louisville, KY');
  })

});