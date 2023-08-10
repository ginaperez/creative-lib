"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Toggle = function Toggle(_ref) {
  var id = _ref.id,
    name = _ref.name,
    onChange = _ref.onChange,
    color = _ref.color,
    transition = _ref.transition,
    square = _ref.square;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledToggleLabel, {
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledToggleInput, {
    type: "checkbox",
    id: id,
    name: name,
    onChange: onChange,
    color: color,
    square: square
  }), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledToggleSlider, {
    transition: transition,
    square: square
  }));
};
exports.Toggle = Toggle;
//# sourceMappingURL=Toggle.js.map