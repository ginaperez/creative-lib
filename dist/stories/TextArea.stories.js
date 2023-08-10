"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Elements/Text Area',
  component: _elements.TextArea,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.TextArea, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  id: 'textarea',
  placeholder: 'Type something...',
  labelText: 'Label for Text Area'
};
//# sourceMappingURL=TextArea.stories.js.map