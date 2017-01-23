var isBcrypt = require('..');
var assert = require('assert');

exports['should return true for "$2a$10$zFiD7PVPdgh.5YrxPbH7cez9sIrKctVZjo1RUl1eTPMf7CVTxNACe"'] = function(test) {
  var value = '$2a$10$zFiD7PVPdgh.5YrxPbH7cez9sIrKctVZjo1RUl1eTPMf7CVTxNACe';
  
  var actual = isBcrypt(value);
  var expected = true;
  
  assert.equal(actual, expected);
  
  test.done();
};

exports['should return true for "$2a$10$ySxTfMoVlFnRZ0pmBUwj3.7zjth/LpXg8a2bYWfz1gX1YjS6AA/aG"'] = function(test) {
  var value = '$2a$10$ySxTfMoVlFnRZ0pmBUwj3.7zjth/LpXg8a2bYWfz1gX1YjS6AA/aG';
  
  var actual = isBcrypt(value);
  var expected = true;
  
  assert.equal(actual, expected);
  
  test.done();
};

exports['should return true for "$2b$04$2moPs/x/wnCfeQ5pCheMcuSJQ/KYjOZG780UjA/SiR.KsYWNrC7SG"'] = function(test) {
  var value = '$2b$04$2moPs/x/wnCfeQ5pCheMcuSJQ/KYjOZG780UjA/SiR.KsYWNrC7SG';
  
  var actual = isBcrypt(value);
  var expected = true;
  
  assert.equal(actual, expected);
  
  test.done();
};

exports['should return true for "$2y$10$HOuBG8tzKLUyk1RK18Xz2uFE76ROdT7w92RSAclL1IoyiS56o70bO"'] = function(test) {
  var value = '$2y$10$HOuBG8tzKLUyk1RK18Xz2uFE76ROdT7w92RSAclL1IoyiS56o70bO';
  
  var actual = isBcrypt(value);
  var expected = true;
  
  assert.equal(actual, expected);
  
  test.done();
};

exports['should return false for "test"'] = function(test) {
  var value = 'test';
  
  var actual = isBcrypt(value);
  var expected = false;
  
  assert.equal(actual, expected);
  
  test.done();
};