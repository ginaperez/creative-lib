"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Table = require("./Table");
Object.keys(_Table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Table[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Table[key];
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