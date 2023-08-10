"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    type = _ref.type;
  var text = type === 'text';
  var square = type === 'square';
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledButton, {
    onClick: onClick,
    text: text,
    square: square
  }, children);
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map