"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDown = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DropDown = function DropDown(_ref) {
  var id = _ref.id,
    name = _ref.name,
    placeholderText = _ref.placeholderText,
    children = _ref.children,
    labelText = _ref.labelText,
    width = _ref.width,
    multiple = _ref.multiple,
    value = _ref.value;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledDropdownLabel, {
    htmlFor: id
  }, labelText), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledDropdownSelect, {
    id: id,
    name: name,
    placeholder: placeholderText,
    width: width,
    multiple: multiple,
    value: value
  }, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledDropdownOption, null, children), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown
  })));
};
exports.DropDown = DropDown;
//# sourceMappingURL=DropDown.js.map