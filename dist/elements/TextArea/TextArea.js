"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
var _Input = require("../Input");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Returns a standard text area. Make sure to pass `id` to enable clicking on the label.
 */
var TextArea = function TextArea(_ref) {
  var id = _ref.id,
    name = _ref.name,
    placeholder = _ref.placeholder,
    maxCharacters = _ref.maxCharacters,
    labelText = _ref.labelText;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledTextAreaContainer, null, labelText && /*#__PURE__*/_react.default.createElement(_Input.StyledInputLabel, {
    htmlFor: id
  }, labelText), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledTextArea, {
    id: id,
    name: name,
    placeholder: placeholder,
    maxLength: maxCharacters
  }));
};
exports.TextArea = TextArea;
//# sourceMappingURL=TextArea.js.map