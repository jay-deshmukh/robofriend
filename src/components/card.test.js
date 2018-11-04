import { shallow } from "enzyme";
import React  from "react";
import Card from './card';

it('Render A Card Component' , () => {
    expect(shallow(<Card />)).toMatchSnapShot();
})