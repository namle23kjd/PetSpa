/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });



fetchMock.enableMocks();
require("jest-fetch-mock").enableMocks();