var bcryptHelper = require('..');
var assert = require('assert');

exports['should return true for "$2a$10$zFiD7PVPdgh.5YrxPbH7cez9sIrKctVZjo1RUl1eTPMf7CVTxNACe"'] = function(test) {
  var value = '$2a$10$zFiD7PVPdgh.5YrxPbH7cez9sIrKctVZjo1RUl1eTPMf7CVTxNACe';
  
  var actual = bcryptHelper.isHash(value);
  var expected = true;
  
  assert.equal(actual, expected);
  
  test.done();
};

exports['should return true for "$2a$10$ySxTfMoVlFnRZ0pmBUwj3.7zjth/LpXg8a2bYWfz1gX1YjS6AA/aG"'] = function(test) {
  var value = '$2a$10$ySxTfMoVlFnRZ0pmBUwj3.7zjth/LpXg8a2bYWfz1gX1YjS6AA/aG';
  
  var actual = bcryptHelper.isHash(value);
  var expected = true;
  
  assert.equal(actual, expected);
  
  test.done();
};

exports['should return false for "test"'] = function(test) {
  var value = 'test';
  
  var actual = bcryptHelper.isHash(value);
  var expected = false;
  
  assert.equal(actual, expected);
  
  test.done();
};