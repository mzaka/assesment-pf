'use strict';

describe('Service: callRestApi', function () {

  // load the service's module
  beforeEach(module('propFinderApp'));

  // instantiate service
  var callRestApi;
  beforeEach(inject(function (_callRestApi_) {
    callRestApi = _callRestApi_;
  }));

  it('should do something', function () {
    expect(!!callRestApi).toBe(true);
  });

});
