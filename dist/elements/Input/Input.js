"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
var _StyledInputLabelContainer = require("./styledComponents/StyledInputLabelContainer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Input = function Input(_ref) {
  var type = _ref.type,
    id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    labelText = _ref.labelText,
    required = _ref.required,
    maxLength = _ref.maxLength,
    width = _ref.width,
    icon = _ref.icon;
  var configuredIcon = icon ? icon : '';
  return /*#__PURE__*/_react.default.createElement(_StyledInputLabelContainer.StyledInputLabelContainer, null, labelText && /*#__PURE__*/_react.default.createElement(_styledComponents.StyledInputLabel, {
    htmlFor: id
  }, labelText), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledInputContainer, {
    width: width
  }, configuredIcon, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledInput, {
    id: id,
    type: type,
    name: name,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    maxLength: maxLength
  })));
};
exports.Input = Input;
var _default = Input;
exports.default = _default;
//# sourceMappingURL=Input.js.map