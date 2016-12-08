'use strict';

describe('ReactGalleryApp', () => {
  let React = require('react/addons');
  let ReactGalleryApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactGalleryApp = require('components/ReactGalleryApp.js');
    component = React.createElement(ReactGalleryApp);
  });

  it('should create a new instance of ReactGalleryApp', () => {
    expect(component).toBeDefined();
  });
});
