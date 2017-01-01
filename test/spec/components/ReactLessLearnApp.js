'use strict';

describe('ReactLessLearnApp', () => {
  let React = require('react/addons');
  let ReactLessLearnApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactLessLearnApp = require('components/ReactLessLearnApp.js');
    component = React.createElement(ReactLessLearnApp);
  });

  it('should create a new instance of ReactLessLearnApp', () => {
    expect(component).toBeDefined();
  });
});
