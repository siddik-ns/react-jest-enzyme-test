import React from 'react';
import { shallow } from 'enzyme';
import Headline from "./index";
import { findByTestAtrr } from "../../utils";

const setUp = (props = {}) => {
  return shallow(<Headline { ...props }/>);
};

describe("Headline Component", () => {
  let component;

  describe('Have Props', () => {
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component, 'headlineComponent');
      expect(wrapper.length).toBe(1);
    });

    it('should render header', function () {
      const header = findByTestAtrr(component, 'header');
      expect(header.length).toBe(1);
    });


    it('should render description', function () {
      const desc = findByTestAtrr(component, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    beforeEach(() => {
      component = setUp();
    });

    it('should not render', function () {
      const wrapper = findByTestAtrr(component, 'headlineComponent');
      expect(wrapper.length).toBe(0);
    });

  });

});