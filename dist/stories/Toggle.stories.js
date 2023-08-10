"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Square = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements/");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Elements/Toggle',
  component: _elements.Toggle,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.Toggle, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'Toggle',
  onChange: function onChange() {}
};
var Square = Template.bind({});
exports.Square = Square;
Square.args = {
  name: 'Toggle',
  onChange: function onChange() {},
  square: true
};
//# sourceMappingURL=Toggle.stories.js.map