"use strict";

var _ref, _ref2, _word;

var trim = function trim(text) {
  return text.trim();
};

var toUpperCase = function toUpperCase(text) {
  return text.toUpperCase();
};

var split = function split(separator) {
  return function (text) {
    return text.split(separator);
  };
};

var word = ' Calopsita do Agreste '; // com o pipeline operator

var words = (_ref = (_ref2 = (_word = word, trim(_word)), toUpperCase(_ref2)), split(' ')(_ref));
console.log(words); // ['CALOPSITA', 'DO', 'AGRESTE']

var product = {
  name: 'Cangaceiro JavaScript',
  price: 29.90,
  type: 'book',
  author: {
    name: 'Flávio Almeida'
  }
};
var name = product === null || product === void 0 ? void 0 : product.author.name;
console.log(name);
//# sourceMappingURL=example.js.map