"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithIcon = exports.TextField = exports.PasswordField = exports.Disabled = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Elements/Inputs',
  component: _elements.Input,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.Input, args);
};
var TextField = Template.bind({});
exports.TextField = TextField;
TextField.args = {
  id: 'text-input',
  type: 'text',
  placeholder: 'Type something...',
  labelText: 'Text Input Label',
  width: "20rem"
};
var PasswordField = Template.bind({});
exports.PasswordField = PasswordField;
PasswordField.args = {
  id: 'password-input',
  type: 'password',
  placeholder: 'Enter password',
  labelText: 'Password Input Label',
  width: '20rem;'
};
var WithIcon = Template.bind({});
exports.WithIcon = WithIcon;
WithIcon.args = {
  id: 'withIcon-input',
  type: 'text',
  placeholder: 'With icon',
  disabled: false,
  labelText: 'Input with Icon',
  width: '20rem;',
  icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCreditCard
  })
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  id: 'diabled-input',
  type: 'text',
  placeholder: 'Disabled text',
  disabled: true,
  labelText: 'Disabled Input Label',
  width: '20rem;'
};
//# sourceMappingURL=Input.stories.js.map