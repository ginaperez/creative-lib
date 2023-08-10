"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = exports.Square = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Elements/Button',
  component: _elements.Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    layout: 'centered'
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
var ButtonStory = function ButtonStory(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.Button, args);
};
var Default = ButtonStory.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Default = Default;
Default.args = {
  children: 'Button',
  onClick: function onClick() {
    alert('Default Clicked');
  }
};
var Text = ButtonStory.bind({});
exports.Text = Text;
Text.args = {
  children: 'Text Button',
  onClick: function onClick() {
    alert('Text Clicked');
  },
  type: 'text'
};
var Square = ButtonStory.bind({});
exports.Square = Square;
Square.args = {
  children: 'Square',
  onClick: function onClick() {
    alert('Square Clicked');
  },
  type: 'square'
};
//# sourceMappingURL=Button.stories.js.map