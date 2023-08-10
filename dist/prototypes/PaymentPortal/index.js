"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _PaymentPortal = require("./PaymentPortal");
Object.keys(_PaymentPortal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PaymentPortal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PaymentPortal[key];
    }
  });
});
var _styledComponents = require("./styledComponents");
Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _styledComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});
//# sourceMappingURL=index.js.map